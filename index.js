const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork([5, 2, 2, 3]);
console.log(network.getLayers());