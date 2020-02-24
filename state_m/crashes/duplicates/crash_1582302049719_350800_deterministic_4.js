function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [v5,"number",1337];
const v7 = {};
const v8 = {toString:v5,constructor:v5,c:Int32Array,length:13.37};
let v9 = v7;
const v11 = new Int8Array();
const v13 = new Map();
const v14 = v13.values();
for (const v16 in "boolean") {
    const v19 = [13.37,13.37,13.37,13.37,13.37];
    const v21 = [v19,1337,13.37];
    const v23 = 1337 > eval;
    const v25 = {__proto__:536870912};
    const v27 = Symbol.species;
    let v29 = 0;
    let v31 = 0;
    let v33 = 0;
    const v35 = {__proto__:536870912};
    let v37 = 0;
    const v39 = v13.__proto__;
    let v40 = 0;
    const v41 = v3 + 1;
    let v43 = 0;
    const v46 = [1337,1337,1337,1337,1337];
    function v47(v48,v49,v50,v51) {
        'use strict'
        try {
            v51[3] = v51;
        } catch(v52) {
            const v56 = [13.37,13.37,13.37];
            const v58 = [1337,1337,1337];
            const v59 = [parseFloat,v56];
            const v60 = {__proto__:v58,e:-1529057902,d:v58,a:v59,length:parseFloat};
        }
        return v46;
    }
    const v61 = {deleteProperty:v47,set:v47,getPrototypeOf:v47,call:v47,preventExtensions:v47,isExtensible:v47,construct:v47,get:v47,ownKeys:v47,setPrototypeOf:v47,has:v47};
    const v63 = new Proxy(v46,v61);
    v63[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
