function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [Reflect,"unscopable",16,1337];
const v8 = {length:v4,constructor:13.37,toString:v7,c:16};
const v9 = {valueOf:16,e:16,b:Reflect,length:v6,c:v8,toString:13.37,__proto__:v4};
let v10 = v9;
const v15 = [13.37,13.37,13.37,13.37,13.37];
let v18 = 0;
const v19 = new ArrayBuffer();
const v20 = v18 + 1;
const v21 = "PI".__proto__;
const v22 = [v15,1337,13.37];
const v24 = 1337 > eval;
const v26 = {__proto__:536870912};
const v28 = Symbol.species;
let v30 = 0;
const v32 = Symbol.isConcatSpreadable;
const v33 = v30 + 1;
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            v43[3] = v43;
        } catch(v44) {
            const v49 = [1337,1337,1337];
            const v50 = [3664180981,3664180981,"string","string"];
            const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",c:parseFloat};
            const v52 = v49.__proto__;
            const v56 = [v39];
            const v58 = [255,255,255];
            let v60 = 0;
            const v61 = {a:255,toString:arguments,c:v56,__proto__:v58,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v38;
    }
    const v62 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
    const v64 = new Proxy(v38,v62);
    v64[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
