const Operator = require('../models/operator-model');
class OperatorsService{

    operatorsjson='[{"id":5,"name":"Gravel","rarity":"4","type":"Specialist","level":5,"elite":0,"maxLevel":45,"rarityDesc":"Four star"},{"id":3,"name":"Silverash","rarity":"6","type":"Guard","level":14,"elite":0,"maxLevel":50,"rarityDesc":"Six star"}]';

    operators = JSON.parse(this.operatorsjson);
    async getAll(){
        this.operators = JSON.parse(this.operatorsjson);
            return this.operators;
    }

    async get(id){
        index = this.operators.findIndex((x)=>{x.id===id});
        return this.operators[index];
    }    

    async set(id,command){
        if(command==="level_up")
        {
            index = this.operators.findIndex((x)=>{x.id===id});
            Operator.changeLevel(this.operators[index],this.operators[index].level+1);
        }
    }

    async add(name){
        
    }
    async delete(id){

    }
}

module.exports = new OperatorsService()