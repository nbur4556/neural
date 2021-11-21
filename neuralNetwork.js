const Neuron = require('./neuron.js');

// An array of neurons grouped into layers
function NeuralNetwork(args) {
    this.schema = args.layerSchema;
    this.map = args.layerMap;

    console.log(this.schema);
    console.log(this.map);

    // Generate layers from existing layer schema
    this.generateFromSchema = function () {
        console.log('generate from layer schema');
    }

    // Generate layers using a layer map
    this.generateFromMap = function () {
        return this.map.map((length, i) => {
            return new Array(length).fill().map(() => {
                const neuron = new Neuron(this.map[i + 1]);
                return neuron;
            });
        })
    }

    this.layers = (this.map) ? this.generateFromMap() : generateFromSchema();
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