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
        const v21 = new ArrayBuffer();
        v9 = v16;
        let v24 = 0;
        do {
            const v25 = v24 + 1;
            const v28 = [-1242988596,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
            v24 = v25;
        } while (v24 < 4);
        let v31 = 0;
        const v32 = v21.slice(v9,4);
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
        let v53 = 0;
    } catch(v54) {
        const v55 = {construct:v54};
    }
}
const v56 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v58 = new Proxy(v12,v56);
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
