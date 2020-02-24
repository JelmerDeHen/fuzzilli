function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = ["string"];
const v7 = {b:v3,__proto__:"string",d:"string"};
const v8 = {d:v6,length:Boolean,c:Boolean,a:Boolean};
let v9 = v5;
const v12 = Symbol.isConcatSpreadable;
const v13 = Symbol[v12];
let v15 = 0;
const v16 = v15 + 1;
const v18 = Number();
const v19 = "boolean".endsWith();
const v22 = [13.37,13.37,13.37,13.37,13.37];
const v24 = [v22,1337,13.37];
const v26 = 1337 > eval;
const v28 = {__proto__:536870912};
let v30 = 0;
const v31 = v30 + 1;
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
