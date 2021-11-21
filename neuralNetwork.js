const Neuron = require('./neuron.js');

function NeuralNetwork(layerMap) {
    this.layers = layerMap.map((length, i) => {
        return new Array(length).fill().map(() => {
            const neuron = new Neuron(layerMap[i + 1]);
            return neuron;
        });
    });
}

NeuralNetwork.prototype.handleInputs = function (inputs) {
    this.layers[0].forEach((neuron, i) => {
        console.log("sigIn:", inputs[i]);
        console.log("sigOut:", neuron.outputSignal(inputs[i]));
    });
}

// Return array of all neuron layers
NeuralNetwork.prototype.getLayers = function () {
    return this.layers
}

module.exports = NeuralNetwork;