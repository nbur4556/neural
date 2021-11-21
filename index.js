const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork([5, 2, 2, 3]);
const networkLayers = network.getLayers();

console.log(networkLayers);

network.handleInputs([1, 0, -1, 1, 0]);