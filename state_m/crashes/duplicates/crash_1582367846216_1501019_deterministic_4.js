function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [-2147483647,v3,13.37,v3];
const v7 = {c:"function"};
const v8 = {};
let v9 = 13.37;
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v31 = 0;
        const v32 = v20();
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v35 = {apply:v24,call:v19,preventExtensions:v19,setPrototypeOf:v21,getOwnPropertyDescriptor:v22,deleteProperty:v24,get:v19,getPrototypeOf:v23,isExtensible:v20,defineProperty:v21};
        const v36 = v31 != v33;
        let v37 = v22;
        const v38 = {get:v19};
        const v39 = v17();
    } catch(v40) {
    }
}
let v42 = 0;
const v43 = v42 + 1;
const v44 = v20();
}
%NeverOptimizeFunction(main);
main();
