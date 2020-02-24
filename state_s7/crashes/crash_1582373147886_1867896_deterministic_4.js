function main() {
const v2 = [13.37];
const v5 = new Uint8ClampedArray();
const v6 = v5.slice();
let v8 = 0;
const v9 = "boolean".__proto__;
const v10 = v8 + 1;
const v11 = new Uint16Array();
const v12 = v11.buffer;
for (let v16 = 0; v16 < 100; v16++) {
}
for (let v20 = 0; v20 < 10; v20++) {
}
const v23 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        const v30 = new Int16Array();
        const v31 = v30.subarray();
        const v34 = {__proto__:"POSITIVE_INFINITY"};
        const v37 = [1337];
        let v38 = v37;
        const v41 = [13.37,this,13.37,10];
        let v44 = 0;
        do {
            let v47 = 0;
            while (v47 < 4) {
                const v48 = v47 + 1;
                v47 = v48;
            }
            const v49 = v44 + 1;
            v44 = v49;
        } while (v44 < 10);
        let v50 = v34;
        const v51 = (-2268785948)[v50];
        const v53 = [1337];
        let v54 = v53;
        const v55 = v31.copyWithin(v54,v27,v28);
    } catch(v56) {
        v25.__proto__ = v56;
    }
}
const v57 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v59 = new Proxy(v23,v57);
v59[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
