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
            let v29 = 0;
            const v30 = v29 + 1;
            v29 = v30;
            v26 = v27;
        } while (v26 < 4);
        const v31 = v14 - 1;
        let v32 = v15;
        let v33 = v14;
        let v35 = 0;
        const v36 = v23.slice(v9);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v43 = [1337,1337];
        const v44 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v46 = [1337,1337,1337,1337,1337];
        const v47 = [v46];
        const v48 = v43[-4096];
        const v49 = v40[-3357639552];
        const v50 = 13.37 == v40;
        let v52 = 0;
        const v53 = v41.flat();
        v17[3] = v17;
        const v54 = v7();
        const v55 = {getOwnPropertyDescriptor:v48,has:v54,construct:v13,preventExtensions:v54,set:v9};
        const v57 = Proxy();
    } catch(v58) {
        const v59 = {construct:v58};
    }
}
const v60 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v62 = new Proxy(v12,v60);
v62[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
