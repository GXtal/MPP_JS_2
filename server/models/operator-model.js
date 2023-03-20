const maxLevels=[[30,30,40,45,50,50],
                [NaN,NaN,55,60,70,80],
                [NaN,NaN,NaN,70,80,90]];
                
const rarityDescs=["One star","Two star","Three star","Four star","Five star","Six star"];
                
class Operator{
    constructor(id,name, type, rarity) {
        this.id = id;//generated
        this.name=name;//inputed
        this.rarity=rarity;//choose
        this.type=type;//choose
        this.level=1;
        this.elite=0;        
        this.maxLevel = maxLevels[this.elite][this.rarity-1];
        this.rarityDesc=rarityDescs[this.rarity-1];
    }      

    levelChange(operator,newLevel)
    {
        if((newLevel>0)&&(newLevel<=operator.maxLevel))
        {
            operator.level=newLevel;
        }
    }

    eliteChange(operator,newElite)
    {
        let oldElite=operator.elite;
        operator.elite=newElite;
        operator.maxLevel = maxLevels[operator.elite][operator.rarity-1];
        if(operator.maxLevel)
        {
            operator.level=1;
        }
        else
        {
            operator.elite=oldElite;
            operator.maxLevel = maxLevels[this.elite][this.rarity-1];
        }
    }
}


module.exports = Operator