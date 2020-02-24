function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337];
const v5 = [Uint32Array];
const v6 = {};
const v7 = {__proto__:v6};
let v8 = v2;
const v11 = 1337 > eval;
let v15 = 0;
const v16 = new Int8Array();
const v17 = v15 + 1;
for (const v18 in "boolean") {
}
let v20 = 0;
const v21 = v20 + 1;
let v23 = 0;
const v25 = Symbol.isConcatSpreadable;
const v26 = v23 + 1;
for (const v28 in "object") {
    const v31 = [1337,1337,1337,1337,1337];
    function v32(v33,v34,v35,v36) {
        'use strict'
        try {
            v36[3] = v36;
        } catch(v37) {
            const v42 = [1337,1337,1337];
            const v43 = [3664180981,3664180981,"string","string"];
            const v44 = {valueOf:v43,length:v42,toString:parseFloat,constructor:"string",c:parseFloat};
            const v45 = v42.__proto__;
            const v49 = [v32];
            const v51 = [255,255,255];
            let v53 = 0;
            const v54 = {a:255,toString:arguments,c:v49,__proto__:v51,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v31;
    }
    const v55 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
    const v57 = new Proxy(v31,v55);
    v57[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
