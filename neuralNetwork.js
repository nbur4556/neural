const Neuron = require('./neuron.js');

function NeuralNetwork(layerMap) {
    this.layers = layerMap.map((length, i) => {
        return new Array(length).fill().map(() => {
            const neuron = new Neuron(layerMap[i + 1]);
            return neuron;
        });
    });
}

NeuralNetwork.prototype.getLayers = function () {
    return this.layers
}

module.exports = NeuralNetwork;