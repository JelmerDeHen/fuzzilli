function main() {
const v4 = [13.37,13.37];
const v6 = [1337];
const v7 = [268435456,"buffer",13.37,v4];
const v8 = {};
const v11 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v18 = new Int16Array();
        const v19 = v18.subarray();
        for (const v21 of "MIN_VALUE") {
            const v23 = [13.37];
        }
        let v24 = parseFloat;
        if (v14) {
        } else {
            const v26 = [13.37,13.37];
        }
        const v27 = [1337];
        let v28 = v27;
        const v29 = v19.copyWithin(v28,v15,v16);
    } catch(v30) {
        v13.__proto__ = v30;
    }
}
const v31 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v33 = new Proxy(v11,v31);
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
