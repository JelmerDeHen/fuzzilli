function main() {
const v1 = [13.37,13.37];
const v3 = [1337];
const v4 = {};
const v6 = typeof v4;
const v8 = v6 === "function";
const v10 = [13.37,13.37,-4294967296];
const v14 = {valueOf:13.37,e:v3,toString:"0DeB1+Gn+W",__proto__:-92412138};
const v15 = v14.__proto__;
const v19 = [1337,1337,1337,1337,1337];
function v20(v21,v22,v23,v24) {
    'use strict'
    let v26 = 0;
    try {
        const v27 = "0DeB1+Gn+W" < v21;
        if (v8) {
            const v28 = ~1337;
        } else {
        }
        let v31 = 0;
        while (v31 < 6) {
            const v32 = v31 + 1;
            v31 = v32;
        }
        const v33 = v20();
        const v34 = Number();
        const v35 = {...v24,...v26,...v15,...v34};
    } catch(v36) {
    }
}
const v37 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v10,__proto__:v20,setPrototypeOf:v20,has:v20};
const v39 = new Proxy(v19,v37);
v39[2] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
