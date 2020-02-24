function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [isFinite,-4096];
const v7 = {c:13.37,valueOf:v6,d:v5,length:v5,a:v3,toString:v3};
const v8 = {toString:v3,a:v6,d:1337};
let v9 = v8;
let v11 = 13.37;
for (const v12 in v7) {
    const v14 = {set:isFinite,get:isFinite};
    const v16 = Object.defineProperty(v5,-4096,v14);
}
const v18 = "boolean".length;
const v21 = [13.37,13.37,13.37,13.37,13.37];
const v23 = 1337 > eval;
let v25 = 0;
const v26 = v25 + 1;
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
