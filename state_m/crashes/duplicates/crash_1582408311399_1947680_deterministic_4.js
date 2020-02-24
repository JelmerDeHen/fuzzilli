function main() {
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
const v7 = [1337,1337,1337,1337,1337];
const v8 = {valueOf:v7,__proto__:v7};
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v22 = [1337,1337];
        const v24 = new ArrayBuffer();
        v10 = v17;
        let v27 = 0;
        do {
            const v28 = v27 + 1;
            v27 = v28;
        } while (v27 < 4);
        let v31 = 0;
        const v32 = v24.slice(v10,4);
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v36 = [1337,13.37,v34,-1155643050];
        let v37 = v34;
        const v39 = [1337,1337];
        const v40 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v37,__proto__:1337,a:v34};
        const v42 = [1337,1337,1337,1337,1337];
        const v43 = [v42];
        const v44 = v39[-4096];
        const v45 = v36[-3357639552];
        const v46 = 13.37 == v36;
        let v48 = 0;
        const v49 = v37.flat();
        v18[3] = v18;
        const v50 = v8();
        const v51 = v50[-2900725722];
        let v53 = undefined;
        let v55 = 0;
    } catch(v56) {
        const v57 = Promise.isSafeInteger();
        for (const v58 in v10) {
        }
        for (const v59 of v57) {
        }
        const v60 = v56();
    }
}
const v61 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v63 = new Proxy(v13,v61);
v63[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
