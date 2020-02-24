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
        let v35 = 0;
        do {
            let v37 = 0;
            const v38 = v37 + 1;
            const v39 = v35 + 1;
            v35 = v39;
        } while (v35 < 3);
        const v40 = v15 << v15;
        const v41 = typeof 0;
        const v43 = v41 === "function";
        const v44 = [13.37];
        const v46 = [1337,13.37,v44,-1155643050];
        let v47 = v44;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v47,__proto__:1337,a:v44};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
        const v55 = v46[-3357639552];
        const v56 = 13.37 == v46;
        let v58 = 0;
        const v59 = v47.flat();
        v17[3] = v17;
        const v60 = v7();
        const v61 = v60[-2900725722];
    } catch(v62) {
        const v63 = {construct:v62};
    }
}
const v64 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v66 = new Proxy(v12,v64);
v66[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
