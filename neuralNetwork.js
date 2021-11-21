const Neuron = require('./neuron.js');

// An array of neurons grouped into layers
function NeuralNetwork(layerMap) {
    this.layers = layerMap.map((length, i) => {
        return new Array(length).fill().map(() => {
            const neuron = new Neuron(layerMap[i + 1]);
            return neuron;
        });
    });
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

//TODO: Method for creating a copy of a neural network
//TODO: Method for modulating neurons in a network

//TODO: Method for outputting / saving a neural network schema

// Return array of all neuron layers
NeuralNetwork.prototype.getLayers = function () {
    return this.layers
}

module.exports = NeuralNetwork;