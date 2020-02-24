function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337];
const v7 = [v4,v6,v4];
const v8 = {__proto__:v6,toString:"description",b:1337,valueOf:-351963217,constructor:1337,length:"description"};
const v9 = {__proto__:v6,toString:"description",d:v6,a:String};
let v10 = v9;
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [v14,1337,13.37];
const v18 = 1337 > eval;
const v20 = {__proto__:536870912};
const v22 = Symbol.species;
let v24 = 0;
let v26 = 0;
let v28 = 0;
const v30 = {get:Symbol};
const v32 = Object.defineProperty(Array,9,v30);
const v34 = new Int8Array();
const v35 = v28 + 1;
for (const v38 in "object") {
    const v41 = [1337,1337,6,1337,1337];
    function v42(v43,v44,v45,v46) {
        'use strict'
        try {
            v46[3] = v46;
        } catch(v47) {
            const v52 = [1337,1337,1337];
            const v53 = [3664180981,3664180981,"string","string"];
            const v54 = {valueOf:v53,length:v52,toString:parseFloat,constructor:"string",c:parseFloat};
            const v55 = v52.__proto__;
            const v59 = [v42];
            const v61 = [255,255,255];
            let v63 = 0;
            const v64 = {a:255,toString:arguments,c:v59,__proto__:v61,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v41;
    }
    const v65 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
    const v67 = new Proxy(v41,v65);
    v67[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
