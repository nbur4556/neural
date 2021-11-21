const Neuron = require('./neuron.js');

// An array of neurons grouped into layers
function NeuralNetwork(args) {
    this.schema = args.schema;
    this.map = args.map;

    // Generate layers from existing layer schema
    this.generateFromSchema = function () {
        const schemaObj = JSON.parse(this.schema);
        return schemaObj.map(layer => new Array(layer.length)
            .fill()
            .map((x, i) => new Neuron(layer[i].connections.length)));
    }

    // Generate layers using a layer map
    this.generateFromMap = function () {
        return this.map.map((length, i) => new Array(length)
            .fill()
            .map(() => new Neuron(this.map[i + 1])))
    }

    this.layers = (this.map) ? this.generateFromMap() : this.generateFromSchema();
}

// Return object of all layers
NeuralNetwork.prototype.getLayers = function () {
    return this.layers;
}

// Return schema string of all layers
NeuralNetwork.prototype.generateSchema = function () {
    return JSON.stringify(this.layers);
}

// Send signals through each layer of the neural network and return signals out
NeuralNetwork.prototype.sendSignals = function (inputs, layerIndex = 0) {
    console.log('\nLAYER', layerIndex);
    console.log(inputs);

    // Get signals out of each neuron in a layer
    const sigOuts = this.layers[layerIndex].map((neuron, i) => {
        const sigOuts = neuron.getOutputs(inputs[i]);
        return sigOuts;
    })

    // Return at output layer
    if (layerIndex >= this.layers.length - 1) {
        return sigOuts;
    }

    // Reduce to single array sum of all signals in a layer
    const sigNext = sigOuts.reduce((pre, next) => pre.map((val, i) => val + next[i]));
    return this.sendSignals(sigNext, ++layerIndex);
}

//TODO: Method for modulating neurons in a network

module.exports = NeuralNetwork;