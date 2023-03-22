const { json } = require("body-parser");
const OperatorModel = require("../models/operator-model");

class OperatorsService {

    operatorsjson = '[{"id":5,"name":"Gravel","rarity":"4","type":"Specialist","level":5,"elite":0,"maxLevel":45,"rarityDesc":"Four star"},{"id":3,"name":"Silverash","rarity":"6","type":"Guard","level":14,"elite":0,"maxLevel":50,"rarityDesc":"Six star"}]';

    operators = [];
    maxId = 0;

    constructor() {
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
        return this.operators[index];
    }

    async add() {
        let id = ++this.maxId;
        let op = new OperatorModel(id, "Knight", "Sniper", 1);
        this.operators.push(op);
        this.operatorsjson = JSON.stringify(this.operators);
        return this.operators;
    }

    async delete(id) {
        console.log(id);
        let index = this.operators.findIndex((x) => { return x.id == id });
        console.log(index);
        this.operators.splice(index, 1);
        console.log(this.operators);
        this.operatorsjson = JSON.stringify(this.operators);
        return true;

    }
}

module.exports = new OperatorsService()