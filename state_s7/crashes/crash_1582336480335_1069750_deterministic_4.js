function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [];
const v8 = {d:13.37,c:v4,__proto__:v7};
const v9 = {e:13.37,b:v8,c:4294967295,d:v4};
const v10 = "fC3oTqo1lV".__proto__;
for (let v14 = 0; v14 < 0; v14++) {
    let v16 = 0;
    let v18 = 0;
    const v19 = Float64Array();
    const v20 = v18 + 1;
    const v21 = v16 + 1;
}
const v22 = v8 < 4294967295;
let v24 = 0;
let v25 = v7;
const v27 = [13.37,13.37,13.37];
const v29 = [1337,1337,1337,1337,1337];
let v30 = v27;
const v32 = [13.37];
const v34 = [1337,1337,1337,1337,1337];
function v35(v36,v37,v38,v39) {
    'use strict'
    try {
        v38.constructor = v32;
        let v42 = 0;
        do {
            const v43 = v42 + 1;
            v42 = v43;
        } while (v42 < 7);
        let v44 = v29;
        const v45 = v39.setInt32();
        const v46 = v36.reduce();
    } catch(v47) {
    }
    const v48 = [v10,v30,v34,v25];
}
const v49 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
const v51 = new Proxy(v34,v49);
v51.constructor = v32;
}
%NeverOptimizeFunction(main);
main();
