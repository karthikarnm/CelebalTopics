function newMod(name){
    console.log("hello" + name)
}
module.exports = {
    newMod : newMod
};

const add=()=>{return 2+3};
const mul=()=>{return 2*3};
module.exports={add:add,mul:mul};