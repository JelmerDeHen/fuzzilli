function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [1337,"U8Sf0oI+2+"];
const v7 = {b:1337,valueOf:v3,length:v6};
const v8 = {e:1337,a:"U8Sf0oI+2+",__proto__:v3,d:Reflect,valueOf:13.37,b:v7};
let v9 = 1337;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
let v18 = 0;
const v20 = Symbol.isConcatSpreadable;
const v21 = v18 + 1;
for (const v23 in "object") {
    const v26 = [1337,1337];
    const v28 = {length:isFinite};
    const v30 = [1337,v28,1337,1337,1337];
    function v31(v32,v33) {
    }
    const v34 = v30.forEach(v31);
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
