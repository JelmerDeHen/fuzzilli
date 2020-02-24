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
            const v27 = v26 - 1;
            const v28 = v26 + 1;
            v26 = v28;
        } while (v26 < 4);
        let v30 = 0;
        const v31 = v23.slice(v9);
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
        for (const v47 of v16) {
            const v48 = v3 + 1;
        }
        const v49 = v14.NaN;
        let v50 = 0;
        const v51 = v36.flat();
        const v52 = v7();
        const v53 = v52[-2900725722];
    } catch(v54) {
        const v55 = {construct:v54};
    }
}
const v56 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v58 = new Proxy(v12,v56);
v58[1] = "MIN_VALUE";
const v59 = v4 * v58;
}
%NeverOptimizeFunction(main);
main();
