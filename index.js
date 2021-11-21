const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork([4, 5, 4, 3, 1]);
const networkLayers = network.getLayers();

// Display Neurons in Network
console.log(networkLayers);

network.sendSignals([1, 1, 0, 0]);

//TODO: Create list of neural networks to train against each other
//TODO: Selection method for top performing networks