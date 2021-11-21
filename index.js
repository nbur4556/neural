const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork([4, 5, 4, 3, 10]);
const result = network.sendSignals([1, 1, 0, 0]);

console.log("RESULT");
console.log(result);

//TODO: Create list of neural networks to train against each other
//TODO: Selection method for top performing networks