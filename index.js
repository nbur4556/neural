const Neuron = require('./neuron.js');

const neuron = new Neuron();
const neuron2 = new Neuron(.0777);

console.log("SigOut:", neuron.outputSignal(1));
console.log("SigOut:", neuron.outputSignal(2));

console.log("SigOut:", neuron2.outputSignal(1));
console.log("SigOut:", neuron2.outputSignal(2));