const operatorsService = require('../service/operators-service')

class OperatorsController{

    async getOperators(req, res, next){
        try{
            const operators = await operatorsService.getAll()
            console.log(operators);
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }

    async getOperator(req, res, next){
        try{
            const {id} = req.params
            const operators = await operatorsService.get(id)
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }    

    async updateOperator(req, res, next){
        try{
            const {id} = req.params
            const {command} = req.body
            const operators = await operatorsService.set(id, command)
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }
    async addOperator(req, res, next){
        try{
            const {name} = req.body
            const operators = await operatorsService.add(name)
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }
    async deleteOperator(req, res, next){
        try{
            const {id} = req.params
            const operatorsData = await operatorsService.delete(id)
            return res.json(operatorsData)
        }catch (e){
            next(e)
        }
    }
}

module.exports = new OperatorsController()