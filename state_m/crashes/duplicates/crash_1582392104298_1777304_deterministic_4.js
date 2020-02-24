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
        let v30 = 0;
        const v31 = v24.slice(v10);
        const v32 = v30 + 1;
        const v33 = [13.37];
        const v35 = [1337,13.37,v33,-1155643050];
        let v36 = v33;
        const v38 = "toStringTag".length;
        v35[v18] = v31;
        const v39 = ArrayBuffer[v17];
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v36,__proto__:1337,a:v33};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v35[-3357639552];
        const v48 = [13.37,13.37,13.37];
        const v49 = 13.37 == v35;
        let v51 = 0;
        const v52 = v36.flat();
        const v53 = v8();
        const v54 = v53[-2900725722];
        let v56 = undefined;
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
