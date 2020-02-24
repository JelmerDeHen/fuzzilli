function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [];
const v6 = {d:13.37,c:v2,__proto__:v5};
const v7 = {e:13.37,b:v6,c:4294967295,d:v2};
let v8 = v5;
const v11 = [13.37,13.37,13.37,13.37,13.37];
const v13 = [v11,1337,13.37];
const v15 = 1337 > eval;
const v17 = {__proto__:536870912};
const v19 = Symbol.species;
let v22 = 0;
const v24 = Symbol.isConcatSpreadable;
const v25 = v22 + 1;
let v27 = 0;
const v28 = RegExp[536870912];
const v29 = v27 + 1;
for (let v33 = 0; v33 < 6; v33++) {
}
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
