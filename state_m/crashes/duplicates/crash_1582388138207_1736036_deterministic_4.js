function main() {
let v2 = Object;
const v7 = [1337,1337];
const v8 = [-4294967295,13.37,2];
let v9 = v7;
const v12 = [];
const v13 = {length:1337,e:1337,c:v12,a:1337,toString:"symbol"};
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        let v23 = 0;
        do {
            const v24 = v23 + 1;
            v23 = v24;
        } while (v23 < 10);
        for (let v28 = 0; v28 < 3; v28++) {
            v19.__proto__ = v28;
        }
        let v29 = 1337;
        let v30 = 1337;
        const v31 = ~"string";
        const v32 = v8.concat(1337,v9);
    } catch(v33) {
    }
    const v35 = v18.values();
    let v36 = 0;
    const v37 = {has:v2};
}
const v38 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v40 = new Proxy(v13,v38);
v40[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
