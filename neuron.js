function Neuron(weight = null) {
    this.weight = weight || (Math.random() * 2) - 1;
}

Neuron.prototype.outputSignal = function (input) {
    const output = input * this.weight;
    return sigmoidSquash(output);
}

module.exports = Neuron; gi

// Squash a number between 1 and -1 on an S curve
const sigmoidSquash = (x, range = 2, slope = -2, offset = -1) => {
    const e = 2.71828; // Euler's Number
    return (range / (1 + Math.pow(e, slope * x))) + offset;
}