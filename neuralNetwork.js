const Neuron = require('./neuron.js');

function NeuralNetwork(layerMap) {
    this.layers = layerMap.map(layerLength => {
        return new Array(layerLength).fill().map(() => new Neuron())
    });
}

NeuralNetwork.prototype.getLayers = function () { return this.layers }

module.exports = NeuralNetwork;