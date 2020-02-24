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
        for (const v35 of v21) {
            const v36 = [];
        }
        const v37 = [1337,13.37,v33,-1155643050];
        let v38 = v33;
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v38,__proto__:1337,a:v33};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v37[-3357639552];
        const v47 = 13.37 == v37;
        let v49 = 0;
        const v50 = v38.flat();
        v17[3] = v17;
        const v51 = v7();
        const v52 = v16.unscopable;
        const v53 = v51[-2900725722];
        let v55 = 0;
    } catch(v56) {
        const v57 = {construct:v56};
    }
}
const v58 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v60 = new Proxy(v12,v58);
v60[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
