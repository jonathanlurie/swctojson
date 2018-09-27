#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const swcmorphologyparser = require('swcmorphologyparser')
const pk = require("../package.json");
const ArgParser = require("../src/argparser")
let argParser = new ArgParser()

function printHelp(){
  let help = `
  Convert SWC neuron morphology files into JSON.
  Usage:
    -in=/path/to/swcfile.swc         The SWC file to convert (input)
    -out=/path/to/jsonfile.json      The JSON file to save (output)

    ${pk.name} v${pk.version}
  `
  console.log( help )
}

if( argParser.hasCorruptedArgument() ){
  console.log("ERROR: wrong argument format.")
  printHelp()
  process.exit()
}

let swcFile = null
let jsonFile = null

try{
  swcFile = argParser.getArgValue("in");
}catch( e ){
  printHelp()
  process.exit()
}

try{
  jsonFile = argParser.getArgValue("out");
}catch( e ){
  printHelp()
  process.exit()
}

if (!fs.existsSync(swcFile)) {
    console.warn("The input file must exist")
    printHelp()
    process.exit()
}

const swcTextContent = fs.readFileSync(swcFile, 'utf8')

let swcParser = new swcmorphologyparser.SwcParser()
swcParser.parse(swcTextContent)
// this one is a flat representation of the morpho tree
let rawMorpho = swcParser.getRawMorphology()

// just display the thing as JSON in the textarea
if (rawMorpho) {
  fs.writeFileSync(jsonFile, JSON.stringify(rawMorpho, null, 2 ), 'utf8');
  console.log("Convertion done.")
} else {
  console.log("Could not convert file.");
}
