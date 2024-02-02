function deepcopy(obj){
    const cpyobj = {};

    for(const key of Object.keys(obj)){
        if(typeof obj[key] == 'object'){
            const newObj = {};
            Object.assign(newObj, deepcopy(obj[key]));

            cpyobj[key] = newObj;
            continue;
        }

        cpyobj[key] = obj[key];
    }

    return cpyobj;
}

const person = {
    name:"Dushyant",
    occ: {
        type: "se",
        loc: {
            type: "wfh",
            place: "noida",
            exp: 2,
        },
        hobbies: ['reading', 'cycling']
    },
    isBad: false,
}

const newObj = deepcopy(person);

newObj.occ.type = "Software eng";
newObj.occ.hobbies[1] = "drumming";

console.log('person: ', person);
console.log('newobj: ', newObj);