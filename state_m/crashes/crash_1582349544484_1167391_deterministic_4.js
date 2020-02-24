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
        const v23 = new ArrayBuffer();
        v9 = v16;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        let v30 = 0;
        const v31 = v23.slice(v9,4);
        const v32 = v30 + 1;
        const v33 = [13.37];
        const v35 = [1337,13.37,v33,-1155643050];
        let v36 = v33;
        const v38 = [1337,1337];
        const v39 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v36,__proto__:1337,a:v33};
        const v41 = [1337,1337,1337,1337,1337];
        const v42 = [v41];
        const v43 = v38[-4096];
        const v44 = v35[-3357639552];
        const v45 = 13.37 == v35;
        let v47 = 0;
        const v48 = v36.flat();
        const v49 = {has:v13};
        const v51 = new Proxy(v14,v49);
        const v52 = v32 * v9;
        const v53 = ArrayBuffer >= v39;
        let v54 = v17;
        if (v51) {
            const v55 = v14 - 1;
        } else {
            const v56 = {get:v54,deleteProperty:v54,isExtensible:v9};
            const v58 = Proxy();
        }
        v17[3] = v17;
        const v59 = v7();
        const v60 = v59[-2900725722];
        let v62 = 0;
    } catch(v63) {
        const v64 = {construct:v63};
    }
}
const v65 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v67 = new Proxy(v12,v65);
v67[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
