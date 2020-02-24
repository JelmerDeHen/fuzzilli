function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [];
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v14 = v21;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            const v36 = new Int8Array(128);
            v36.constructor = Int32Array;
            const v38 = v36.slice(v36,1337);
            v31 = v32;
        } while (v31 < 4);
        let v41 = 0;
        const v42 = v28.slice(v14,4);
        const v43 = v41 + 1;
        const v44 = [13.37];
        const v46 = [1337,13.37,v44,-1155643050];
        let v47 = v44;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v47,__proto__:1337,a:v44};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
        const v55 = v46[-3357639552];
        const v56 = 13.37 == v46;
        let v58 = 0;
        const v59 = v47.flat();
        v22[3] = v22;
        const v60 = v12();
        const v61 = v60[-2900725722];
        let v63 = 0;
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v68 = new Proxy(v17,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
