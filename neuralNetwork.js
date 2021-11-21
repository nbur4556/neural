const Neuron = require('./neuron.js');

function NeuralNetwork(layerMap) {
    this.layers = layerMap.map((length, i) => {
        return new Array(length).fill().map(() => {
            const neuron = new Neuron(layerMap[i + 1]);
            return neuron;
        });
    });
}

NeuralNetwork.prototype.sendSignals = function (inputs, layerIndex = 0) {

    console.log('\nLAYER', layerIndex);
    console.log(inputs);

    const sigNext = this.layers[layerIndex]
        .map((neuron, i) => {
            const sigOuts = neuron.getOutputs(inputs[i]);
            return sigOuts;
        })
        // Reduce to sum of all signals in a layer
        .reduce((pre, next) => pre.map((val, i) => val + next[i]));

    console.log("NEXT INPUTS:", sigNext);

    if (layerIndex < this.layers.length - 1) {
        this.sendSignals(sigNext, ++layerIndex);
    }
}

// Return array of all neuron layers
NeuralNetwork.prototype.getLayers = function () {
    return this.layers
}

module.exports = NeuralNetwork;