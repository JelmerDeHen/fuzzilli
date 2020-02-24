function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [1337,v5,13.37];
const v7 = {d:v3,toString:Object,__proto__:65537,length:v3,a:Object};
const v8 = {toString:1337,c:v5};
let v9 = v7;
const v12 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        let v21 = 0;
        while (v21 < 10) {
            const v22 = v12[9007199254740993];
            const v23 = v21 + 1;
            v21 = v23;
        }
        const v24 = v15.iterator;
        const v25 = new Int16Array();
        const v26 = v25.subarray();
        const v28 = [1337];
        let v29 = v28;
        const v30 = v26.copyWithin(v29,v16,v17);
    } catch(v31) {
    }
}
const v32 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v34 = new Proxy(v12,v32);
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
