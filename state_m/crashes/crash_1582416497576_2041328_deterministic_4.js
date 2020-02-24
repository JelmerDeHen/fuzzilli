function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v21 = [1337,1337];
        const v22 = v16 != v17;
        v21.__proto__ = v7;
        const v24 = new ArrayBuffer();
        v9 = v16;
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            v27 = v28;
        } while (v27 < 4);
        let v31 = 0;
        const v32 = v24.slice(v9,4);
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v36 = [1337,13.37,v34,-1155643050];
        let v37 = v34;
        const v39 = [1337,1337];
        const v40 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v37,__proto__:1337,a:v34};
        const v42 = [1337,1337,1337,1337,1337];
        const v43 = [v42];
        const v44 = v39[-4096];
        const v45 = v36[-3357639552];
        const v46 = 13.37 == v36;
        let v48 = 0;
        const v49 = v37.flat();
        const v50 = v7();
        let v52 = undefined;
        v52 = v21;
    } catch(v53) {
        const v54 = {construct:v53};
    }
}
const v55 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v57 = new Proxy(v12,v55);
v57[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
