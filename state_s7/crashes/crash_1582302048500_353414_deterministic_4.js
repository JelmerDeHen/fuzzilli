function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337,1337,1337,1337];
const v7 = [13.37];
const v8 = {c:1337,constructor:13.37,length:1337,d:13.37,__proto__:Proxy,a:13.37};
const v9 = {valueOf:"symbol",length:v8,a:v4,d:7,b:v7};
let v10 = v8;
const v12 = new Int8Array();
const v14 = new Map();
const v15 = v14.values();
for (const v17 in "boolean") {
    const v20 = [13.37,13.37,13.37,13.37,13.37];
    const v22 = [v20,1337,13.37];
    const v24 = 1337 > eval;
    const v26 = {__proto__:536870912};
    const v28 = Symbol.species;
    let v30 = 0;
    let v32 = 0;
    let v34 = 0;
    const v37 = [1337,1337,1337,1337];
    const v38 = {valueOf:v37,length:eval};
    const v41 = [1337,1337,1337,1337,1337];
    function v42(v43,v44,v45,v46) {
        'use strict'
        try {
            v46[3] = v46;
        } catch(v47) {
            const v53 = {length:"N0Xx92zvHQ"};
            const v54 = {constructor:13.37,length:13.37,__proto__:v53,toString:Number,a:"N0Xx92zvHQ"};
            let v58 = v45;
            const v59 = gc();
            const v60 = {toString:v38,valueOf:"MIN_VALUE",d:v53,constructor:v41,c:Number,length:v41};
            const v61 = v41.__proto__;
            const v62 = {isExtensible:eval,setPrototypeOf:v43,has:v42,preventExtensions:v42,getPrototypeOf:v42,call:Object,apply:v42,ownKeys:v42,set:v47,deleteProperty:v44,getOwnPropertyDescriptor:Number,construct:eval};
            const v64 = new Proxy(Number,v62);
            const v65 = Object();
        }
        return v41;
    }
    const v66 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
    const v68 = new Proxy(v41,v66);
    v68[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
