function main() {
const v2 = "number".__proto__;
const v3 = -536870912 < "number";
let v4 = v3;
const v5 = v2.__proto__;
let v7 = 0;
const v8 = "number".__proto__;
const v9 = v7 + 1;
const v11 = [13.37];
const v13 = [1337,1337,1337];
const v14 = [v13,1337];
const v15 = {__proto__:v11,e:v11,c:v13};
const v16 = {constructor:1337,a:1337,e:v13,c:v13};
let v17 = "number";
const v19 = WeakSet[13.37];
const v22 = 1337 > eval;
let v24 = 0;
const v26 = Symbol.isConcatSpreadable;
const v27 = v24 + 1;
for (const v29 in "object") {
    const v32 = [1337,1337,1337,1337,1337];
    function v33(v34,v35,v36,v37) {
        'use strict'
        try {
            v37[3] = v37;
        } catch(v38) {
            const v43 = [1337,1337,1337];
            const v44 = [3664180981,3664180981,"string","string"];
            const v45 = {valueOf:v44,length:v43,toString:parseFloat,constructor:"string",c:parseFloat};
            const v46 = v43.__proto__;
            const v50 = [v33];
            const v52 = [255,255,255];
            let v54 = 0;
            const v55 = {a:255,toString:arguments,c:v50,__proto__:v52,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v32;
    }
    const v56 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
    const v58 = new Proxy(v32,v56);
    v58[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
