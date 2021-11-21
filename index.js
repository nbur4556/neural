const NeuralNetwork = require('./neuralNetwork');

const network = new NeuralNetwork({ map: [4, 5, 4, 3, 10] });
const networkSchema = network.generateSchema();

const cloneNetwork = new NeuralNetwork({ schema: networkSchema });
cloneNetwork.mutate();
const cloneNetworkSchema = cloneNetwork.generateSchema();

const gen3Network = new NeuralNetwork({ schema: cloneNetworkSchema });
gen3Network.mutate();

// TEST Clone Network
// const networkLayers = network.getLayers();
// const cloneNetworkLayers = cloneNetwork.getLayers();

// networkLayers.forEach((layer, i) => {
//     console.log('\nLAYER', i);

//     layer.forEach((neuron, ii) => {
//         console.log('\n')
//         console.log(neuron);
//         console.log(cloneNetworkLayers[i][ii])
//     })
// });

// TEST Mutate Network

// TEST Run Network
const input = [1, 1, 0, 0];
const result = network.sendSignals(input);
const cloneResult = cloneNetwork.sendSignals(input);
const gen3Result = gen3Network.sendSignals(input);

console.log("RESULTS:");
console.log(result);
console.log(cloneResult);
console.log(gen3Result);

//TODO: Create list of neural networks to train against each other
//TODO: Selection method for top performing networks