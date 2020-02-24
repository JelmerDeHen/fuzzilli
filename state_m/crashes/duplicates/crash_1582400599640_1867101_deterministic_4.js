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
        v17[3] = v17;
        const v50 = v7();
        const v51 = v50[-2900725722];
        let v52 = 1337;
        const v53 = v14 < v46;
        const v54 = [1337,ArrayBuffer,v42,v50];
        let v55 = v37;
        for (const v56 of v45) {
        }
        const v57 = 4 && v15;
        const v58 = v17.__proto__;
        const v60 = Symbol.isConcatSpreadable;
        for (const v61 of v17) {
            const v62 = v54 in v31;
        }
        const v63 = v17.call();
        let v65 = 0;
    } catch(v66) {
        const v67 = {construct:v66};
    }
}
const v68 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v70 = new Proxy(v12,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
