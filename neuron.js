function Neuron(nextLength = 0, weight = null) {
    this.id = Math.random().toString().substr(2, 9);
    this.weight = weight || (Math.random() * 2) - 1;
    this.connections = new Array(nextLength).fill().map(() => Math.random())
}

Neuron.prototype.getConnections = function () {
    return this.connections;
}

// Generate weighted signal out between 1 and -1
Neuron.prototype.getOutputs = function (input) {
    const weightedOut = input * this.weight;
    const sigOuts = this.connections.map(connection => sigmoidSquash(weightedOut * connection));
    return sigOuts;
}

module.exports = Neuron;

// Squash a number between 1 and -1 on an S curve
const sigmoidSquash = (x, range = 2, slope = -2, offset = -1) => {
    const e = 2.71828; // Euler's Number
    return (range / (1 + Math.pow(e, slope * x))) + offset;
}