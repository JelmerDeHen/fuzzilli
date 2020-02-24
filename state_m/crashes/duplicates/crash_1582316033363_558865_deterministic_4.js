function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [WeakMap];
const v8 = {valueOf:1337,a:"byteLength",e:v7,__proto__:1337,c:WeakMap,length:10000,b:10000};
const v9 = {d:v7,b:13.37};
let v10 = v7;
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [v13,1337,13.37];
const v17 = 1337 > eval;
const v19 = {__proto__:536870912};
const v21 = Symbol.species;
let v23 = 0;
let v25 = 0;
const v26 = v25 + 1;
let v28 = 0;
const v29 = v28 + 1;
let v31 = 0;
const v32 = v31 + 1;
for (const v34 in "object") {
    const v37 = [1337,1337,1337,1337,1337];
    function v38(v39,v40,v41,v42) {
        'use strict'
        try {
            v42[3] = v42;
        } catch(v43) {
            const v48 = [1337,1337,1337];
            const v49 = [3664180981,3664180981,"string","string"];
            const v50 = {valueOf:v49,length:v48,toString:parseFloat,constructor:"string",c:parseFloat};
            const v51 = v48.__proto__;
            const v55 = [v38];
            const v57 = [255,255,255];
            let v59 = 0;
            const v60 = {a:255,toString:arguments,c:v55,__proto__:v57,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v37;
    }
    const v61 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
    const v63 = new Proxy(v37,v61);
    v63[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
