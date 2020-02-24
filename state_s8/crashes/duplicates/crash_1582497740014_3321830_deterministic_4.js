function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [-268435456,1337,v5];
const v7 = {toString:v5,b:v5,length:v5,constructor:v5,e:Object,__proto__:13.37,valueOf:-268435456};
const v10 = [1337,1337,"MIN_VALUE",1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = {};
        const v18 = [v17];
        const v19 = {construct:v13,defineProperty:v14,isExtensible:v13,setPrototypeOf:v11,call:v11,apply:v11,set:v11,ownKeys:v15,preventExtensions:v13,deleteProperty:v11};
        const v21 = new Proxy(v17,v19);
        let v23 = 0;
        while (v23 <= 4) {
            const v24 = v23 + 1;
            v23 = v24;
        }
        let v27 = 0;
        v15.toString = Proxy;
        const v28 = v27 + 1;
        const v29 = 7 in v12;
        const v30 = {construct:v21,getPrototypeOf:v21,setPrototypeOf:v12,defineProperty:v21,getOwnPropertyDescriptor:v11,call:v12,deleteProperty:v21,has:Object,set:v14};
        const v32 = Proxy();
    } catch(v33) {
        const v34 = [];
        const v35 = {a:v34};
    }
}
const v36 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:1337,has:v11};
const v38 = new Proxy(v10,v36);
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
