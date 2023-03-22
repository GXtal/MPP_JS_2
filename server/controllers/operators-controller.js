const operatorsService = require('../service/operators-service')

class OperatorsController{

    async getOperators(req, res, next){
        try{
            const operators = await operatorsService.getAll()            
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }

    async getOperator(req, res, next){
        try{
            const {id} = req.params
            const operator = await operatorsService.get(id)
            return res.json(operator)
        }catch (e){
            next(e)
        }
    }    

    async updateOperator(req, res, next){
        try{
            const {id} = req.params
            const newop = req.body
            const operator = await operatorsService.set(id, newop)
            return res.json(operator)
        }catch (e){
            next(e)
        }
    }
    async addOperator(req, res, next){
        try{
            const operators = await operatorsService.add()
            return res.json(operators)
        }catch (e){
            next(e)
        }
    }
    async deleteOperator(req, res, next){
        try{
            const {id} = req.params            
            const flag = await operatorsService.delete(id)
            return res.json(flag)
        }catch (e){
            next(e)
        }
    }
}

module.exports = new OperatorsController()