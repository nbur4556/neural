const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork({ map: [4, 5, 4, 3, 10] });
const cloneNetwork = new NeuralNetwork({ schema: networkSchema });

// TEST Clone Network
// const networkLayers = network.getLayers();
// const networkSchema = network.generateSchema();
// const cloneNetworkLayers = cloneNetwork.getLayers();
// const cloneNetworkSchema = cloneNetwork.generateSchema();

// networkLayers.forEach((layer, i) => {
//     console.log('\nLAYER', i);

//     layer.forEach((neuron, ii) => {
//         console.log('\n')
//         console.log(neuron);
//         console.log(cloneNetworkLayers[i][ii])
//     })
// });

// TEST Run Network
const input = [1, 1, 0, 0];
const result = network.sendSignals(input);
const cloneResult = cloneNetwork.sendSignals(input);

console.log("RESULT");
console.log(result);
console.log(cloneResult);

//TODO: Create list of neural networks to train against each other
//TODO: Selection method for top performing networks