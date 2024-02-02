Object.prototype.deepSeal = function (obj){
    Object.seal(obj);

    for(const key of Object.keys(obj)){
        if(typeof obj[key] === 'object' && obj[key] != null){
            Object.deepSeal(obj[key]);
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

const newObj = Object.deepSeal(user);

newObj.job.loc = "modify";
delete newObj.job.type;
newObj.job['newkey'] = 'new value';
newObj.name='shallow modify';
newObj['nickname'] = 'random';

console.log('newObj: ', newObj);
console.log('user: ', user);