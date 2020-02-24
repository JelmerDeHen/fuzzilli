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
        let v28 = 0;
        while (v28 < 9) {
            const v29 = v28 + 1;
            v28 = v29;
        }
        const v30 = 1337 % 9;
        const v31 = new ArrayBuffer();
        let v33 = 0;
        do {
            const v34 = v33 + 1;
            v33 = v34;
        } while (v33 < 4);
        let v36 = 0;
        const v37 = v24.slice(v10);
        const v38 = v36 + 1;
        const v39 = [13.37];
        const v41 = [1337,13.37,v39,-1155643050];
        let v42 = v39;
        const v44 = [1337,1337];
        const v45 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v42,__proto__:1337,a:v39};
        const v47 = [1337,1337,1337,1337,1337];
        const v48 = [v47];
        const v49 = v44[-4096];
        const v50 = v41[-3357639552];
        const v51 = 13.37 == v41;
        let v53 = 0;
        const v54 = v42.flat();
        v18[3] = v18;
        const v55 = v8();
        const v56 = v55[-2900725722];
    } catch(v57) {
        const v58 = {construct:v57};
    }
}
const v59 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v61 = new Proxy(v13,v59);
v61[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
