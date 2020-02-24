function main() {
const v2 = [13.37];
for (const v3 of v2) {
    const v5 = [13.37];
}
const v7 = [1337];
const v8 = [13.37,v2,-654406978,-654406978];
const v9 = {constructor:-654406978,d:v7,a:13.37};
const v12 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v20 = new Int16Array(26640);
        for (const v21 of v20) {
            const v22 = v17 & -654406978;
        }
        const v23 = v20.subarray();
        const v25 = [1337];
        let v26 = v25;
        const v27 = v23.copyWithin(v26,v16);
    } catch(v28) {
        v14.__proto__ = v28;
    }
}
const v29 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v31 = new Proxy(v12,v29);
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
