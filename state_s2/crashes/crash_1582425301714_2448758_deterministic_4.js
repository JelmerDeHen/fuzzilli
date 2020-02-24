function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [];
const v7 = {constructor:v5,__proto__:v6,toString:v6,b:-2147483647,a:v6,valueOf:v6};
const v11 = [1337,1337,"MIN_VALUE",1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        let v18 = 0;
        for (const v19 in v7) {
            const v20 = v13.__proto__;
        }
        v16.__proto__ = v13;
    } catch(v21) {
        const v22 = v15 + 1;
        const v23 = v14.setInt16();
        const v24 = {deleteProperty:v21,isExtensible:v15,getOwnPropertyDescriptor:v13,set:Promise,preventExtensions:v15,construct:v13,setPrototypeOf:v21,getPrototypeOf:v14,call:v14,has:v13,apply:v21};
        const v26 = Proxy();
        const v27 = [];
        const v28 = {a:v27};
        const v29 = {__proto__:v16,constructor:v28,length:v27};
    }
}
const v30 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,d:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
const v32 = new Proxy(v11,v30);
v32[1] = "MIN_VALUE";
const v34 = Symbol.toStringTag;
const v35 = v32[v34];
const v36 = arguments.__proto__;
}
%NeverOptimizeFunction(main);
main();
