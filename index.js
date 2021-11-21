const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork({ map: [4, 5, 4, 3, 10] });
const networkLayers = network.getLayers();
const networkSchema = network.generateSchema();

console.log(networkLayers);
// console.log(networkSchema);

const cloneNetwork = new NeuralNetwork({ schema: networkSchema });
const cloneNetworkLayers = cloneNetwork.getLayers();
const cloneNetworkSchema = cloneNetwork.generateSchema();

console.log(cloneNetworkLayers);
// console.log(cloneNetworkSchema);

// TEST Run Network
// const result = network.sendSignals([1, 1, 0, 0]);

// console.log("RESULT");
// console.log(result);

//TODO: Create list of neural networks to train against each other
//TODO: Selection method for top performing networks