function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [Function,v3];
const v7 = {toString:1,constructor:13.37};
const v8 = {};
let v9 = 13.37;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
const v18 = {__proto__:536870912};
const v20 = Symbol.species;
let v22 = 0;
let v24 = 0;
const v25 = v24 + 1;
let v27 = 0;
const v28 = v27 + 1;
for (const v30 in "object") {
    const v33 = [1337,1337,1337,1337,1337];
    function v34(v35,v36,v37,v38) {
        'use strict'
        try {
            v38[3] = v38;
        } catch(v39) {
            const v44 = [1337,1337,1337];
            const v45 = [3664180981,3664180981,"string","string"];
            const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
            const v47 = v44.__proto__;
            const v51 = [v34];
            const v53 = [255,255,255];
            let v55 = 0;
            const v56 = {a:255,toString:arguments,c:v51,__proto__:v53,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v33;
    }
    const v57 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
    const v59 = new Proxy(v33,v57);
    v59[1] = "MIN_VALUE";
}
let v61 = 0;
for (let v65 = 0; v65 < 1; v65++) {
}
}
%NeverOptimizeFunction(main);
main();
