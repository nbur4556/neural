function Neuron(args) {
    this.id = Math.random().toString().substr(2, 9);
    this.weight = args.weight || (Math.random() * 2) - 1;
    this.connections = args.connections || new Array(args.connectionCount || 0)
        .fill()
        .map(() => Math.random());

    this.getId = function () { return this.id }
    this.getWeight = function () { return this.weight }
    this.setWeight = function (weight) { this.weight = weight }
    this.getConnections = function () { return this.connections }
    this.setConnections = function (connections) { this.connections = connections }
}

// Alter neuron weight by value between p and -p
Neuron.prototype.mutateWeight = function (p) {
    this.weight += Math.random() * (p * 2) - p;
}

// Alter each neuron connection by value between p and -p
Neuron.prototype.mutateConnections = function (p) {
    this.connections = this.connections.map(connection => {
        const mutation = Math.random() * (p * 2) - p;
        return connection += mutation;
    })
}

// Generate weighted signal out between 1 and -1
Neuron.prototype.getOutputs = function (input) {
    const weightedOut = input * this.weight;

    // If next connections is true, send output for each connection strength
    return (this.connections.length > 0)
        ? this.connections.map(connection => sigmoidSquash(weightedOut * connection))
        : sigmoidSquash(weightedOut);
}

//TODO: Method for modulating neuron weight

module.exports = Neuron;

// Squash a number between 1 and -1 on an S curve
const sigmoidSquash = (x, range = 2, slope = -2, offset = -1) => {
    const e = 2.71828; // Euler's Number
    return (range / (1 + Math.pow(e, slope * x))) + offset;
}