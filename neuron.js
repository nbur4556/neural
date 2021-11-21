function Neuron(weight = null) {
    this.weight = weight || (Math.random() * 2) - 1;

    this.sigmoidSquash = function (x) {
        const e = 2.71828;
        return (2 / (1 + Math.pow(e, x * -1))) - 1;
    }
}

Neuron.prototype.outputSignal = function (input) {
    const output = input * this.weight;
    return this.sigmoidSquash(output);
}

module.exports = Neuron; gi