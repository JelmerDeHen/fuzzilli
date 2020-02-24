function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [parseFloat,-268435456,v5];
const v7 = {length:-268435456};
const v8 = {b:13.37,length:13.37,constructor:v6,d:v5,c:v7};
let v9 = v8;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
const v18 = {__proto__:536870912};
let v20 = 0;
const v22 = Symbol.isConcatSpreadable;
const v23 = v20 + 1;
const v27 = [1337,1337,1337];
const v28 = [-3583831853];
const v29 = {length:v28,e:DataView,valueOf:v27};
let v31 = undefined;
const v33 = new Float32Array();
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
