const OperatorModel = require("../models/operator-model");
const fs = require('fs')
const path = require('path')
const operatorsDB = path.resolve(__dirname, "operators.json")

class OperatorsService {

    operatorsjson = '';

    operators = [];
    maxId = 0;

    constructor() {

        try {
            this.operatorsjson = fs.readFileSync(operatorsDB, "utf8");
        } catch(error) {
            console.error(error);
        }

        this.operators = JSON.parse(this.operatorsjson);

        console.log("operators");
        console.log(this.operators);

        this.operators.forEach((x) => {
            if (x.id > this.maxId) {
                this.maxId = x.id
            }
        })
    }
    async getAll() {

        return this.operators;
    }

    async get(id) {
        let index = this.operators.findIndex((x) => { return x.id == id });
        return this.operators[index];
    }

    async set(id, newOperator) {
        let index = this.operators.findIndex((x) => { return x.id == id });
        let op = new OperatorModel(newOperator.id, newOperator.name, newOperator.type, newOperator.rarity, newOperator.level, newOperator.elite);
        this.operators[index] = op;
        console.log('ftghjiihugyftyg', this.operators);
        this.operatorsjson = JSON.stringify(this.operators);
        fs.writeFileSync(operatorsDB, this.operatorsjson);
        return this.operators[index];
    }

    async add() {
        let id = ++this.maxId;
        let op = new OperatorModel(id, "Knight", "Sniper", 1);
        this.operators.push(op);
        this.operatorsjson = JSON.stringify(this.operators);
        fs.writeFileSync(operatorsDB, this.operatorsjson);
        return this.operators;
    }

    async delete(id) {
        console.log(id);
        let index = this.operators.findIndex((x) => { return x.id == id });
        console.log(index);
        this.operators.splice(index, 1);
        console.log(this.operators);
        this.operatorsjson = JSON.stringify(this.operators);
        fs.writeFileSync(operatorsDB, this.operatorsjson);
        return this.operators;

    }
}

module.exports = new OperatorsService()