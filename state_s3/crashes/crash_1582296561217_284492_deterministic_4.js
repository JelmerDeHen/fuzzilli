function main() {
const v1 = [1337,1337];
const v4 = [-531818.718609194,-531818.718609194,-531818.718609194,-531818.718609194];
const v5 = [v4,268435456,v1];
let v7 = 0;
const v8 = v7 + 1;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        for (let v20 = 0; v20 < 2; v20++) {
        }
        const v21 = v12();
        for (const v22 of v11) {
        }
    } catch(v23) {
    }
}
const v24 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v26 = new Proxy(v11,v24);
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
