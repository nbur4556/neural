const Neuron = require('./neuron.js');

function NeuralNetwork(layerMap) {
    this.layers = layerMap.map((length, i) => {
        return new Array(length).fill().map(() => {
            const neuron = new Neuron(layerMap[i + 1]);
            return neuron;
        });
    });
}

NeuralNetwork.prototype.sendSignals = function (inputs) {
    this.layers.forEach((layer, i) => {
        console.log('\nLAYER:', i);

        // Get signals out for each neuron in layer
        const sigNext = layer
            .map((neuron, i) => {
                const sigOuts = neuron.getOutputs(inputs[i]);
                return sigOuts;
            })
            .reduce((pre, next) => pre.map((val, i) => val + next[i]));

        console.log('SUM:', sigNext);
    });
}

// Return array of all neuron layers
NeuralNetwork.prototype.getLayers = function () {
    return this.layers
}

module.exports = NeuralNetwork;