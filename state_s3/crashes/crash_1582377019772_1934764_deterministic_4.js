function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = new Uint8ClampedArray();
        const v14 = new Int16Array();
        const v15 = typeof v14;
        const v17 = v15 === "function";
        let v18 = v5;
        if (v7) {
            for (const v19 in v2) {
                v5[1] = v19;
            }
            const v22 = 3156875969 <= 8;
        } else {
            const v23 = new WeakSet(v9);
            v18 = v7;
        }
        const v24 = new Int16Array();
        const v25 = v24.subarray();
        const v27 = [1337];
        let v28 = v27;
        const v29 = v25.copyWithin(v28,v9,v10);
    } catch(v30) {
        v7.__proto__ = v30;
    }
}
const v31 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v33 = new Proxy(v5,v31);
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
