function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [v3];
const v7 = {length:1337,b:v3,c:WeakSet};
const v8 = {length:"5IbgNim4JO",e:v7,c:1337};
let v9 = v8;
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [v14,1337,13.37];
const v18 = 1337 > eval;
const v21 = typeof "__proto__";
const v23 = v21 === "boolean";
const v24 = "number" << "boolean";
for (const v25 in "boolean") {
}
let v27 = 0;
const v29 = Symbol.isConcatSpreadable;
const v30 = v27 + 1;
for (const v32 in "object") {
    const v35 = [1337,1337,1337,1337,1337];
    function v36(v37,v38,v39,v40) {
        'use strict'
        try {
            v40[3] = v40;
        } catch(v41) {
            const v46 = [1337,1337,1337];
            const v47 = [3664180981,3664180981,"string","string"];
            const v48 = {valueOf:v47,length:v46,toString:parseFloat,constructor:"string",c:parseFloat};
            const v49 = v46.__proto__;
            const v53 = [v36];
            const v55 = [255,255,255];
            let v57 = 0;
            const v58 = {a:255,toString:arguments,c:v53,__proto__:v55,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v35;
    }
    const v59 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
    const v61 = new Proxy(v35,v59);
    v61[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
