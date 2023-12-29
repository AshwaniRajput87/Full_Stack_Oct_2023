Object.prototype.deepFreeze = function (obj){
    Object.freeze(obj);

    for(const key of Object.keys(obj)){
        if(typeof obj[key] === 'object' && obj[key] != null){
            Object.deepFreeze(obj[key]);
        }
    }

    return obj;
}

const user = {
    name: "henry",
    age: 4,
    hobbies: ['cycling', 'waling'],
    job: {
        loc: 'noida',
        type :"se",
        salary: {
            amount: 3902,
            increment: 4
        },
    }
}; 

const newObj = Object.deepFreeze(user);
newObj.job.loc = "modify";
delete newObj.job.type;
newObj.name='shallow modify';
console.log('newObj: ', newObj);
console.log('user: ', user);