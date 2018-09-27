# SWC to JSON
CLI tool to convert SWC neuron morphology files into JSON files. SWC files must respect [this spec](http://www.neuronland.org/NLMorphologyConverter/MorphologyFormats/SWC/Spec.html).

## Install
```bash
$ sudo npm install -g swctojson
```

## Usage
```bash
Convert SWC neuron morphology files into JSON.
Usage:
  -in=/path/to/swcfile.swc         The SWC file to convert (input)
  -out=/path/to/jsonfile.json      The JSON file to save (output)
```
Such as:
```bash
$ swctojson -in=/path/to/swcfile.swc -out=/path/to/jsonfile.json
```

The JSON output is compatible with the morphology 3D viewer [morphoviewer](https://github.com/jonathanlurie/morphoviewer).
