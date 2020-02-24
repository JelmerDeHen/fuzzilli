function main() {
const v1 = [13.37];
const v3 = [1337];
const v4 = [v3,v1];
const v5 = {c:1337,b:v3};
const v6 = {a:v5,constructor:v4,c:v3};
let v7 = v4;
const v12 = ~"isConcatSpreadable";
const v13 = 0 | "boolean";
const v14 = "isConcatSpreadable".startsWith();
const v18 = [13.37,13.37,13.37,13.37,13.37];
const v20 = [v18,1337,13.37];
const v22 = 1337 > eval;
let v24 = 0;
const v25 = "toStringTag".length;
const v26 = v24 + 1;
let v28 = 0;
const v30 = Symbol.isConcatSpreadable;
const v31 = v28 + 1;
for (const v33 in "object") {
    const v36 = [1337,1337,1337,1337,1337];
    function v37(v38,v39,v40,v41) {
        'use strict'
        try {
            v41[3] = v41;
        } catch(v42) {
            const v47 = [1337,1337,1337];
            const v48 = [3664180981,3664180981,"string","string"];
            const v49 = {valueOf:v48,length:v47,toString:parseFloat,constructor:"string",c:parseFloat};
            const v50 = v47.__proto__;
            const v54 = [v37];
            const v56 = [255,255,255];
            let v58 = 0;
            const v59 = {a:255,toString:arguments,c:v54,__proto__:v56,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v36;
    }
    const v60 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
    const v62 = new Proxy(v36,v60);
    v62[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
