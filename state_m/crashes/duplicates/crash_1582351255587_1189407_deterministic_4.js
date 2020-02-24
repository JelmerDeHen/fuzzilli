function main() {
const v1 = -Infinity;
const v2 = [v1,v1,v1,v1];
const v4 = [1337,1337,1337,1337,1337];
const v5 = {__proto__:1337,length:Proxy,b:v4,a:v4};
const v9 = [1337,13.37,1337,Uint8Array];
let v10 = v9;
const v12 = [1337,1337,1337,1337,1337];
const v13 = {valueOf:v12,__proto__:v12};
let v15 = 13.37;
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v27 = [1337,1337];
        const v29 = new ArrayBuffer();
        v15 = v22;
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 4);
        let v36 = 0;
        const v37 = v29.slice(v15);
        const v38 = v36 + 1;
        const v39 = [13.37];
        const v41 = [1337,13.37,v39,-1155643050];
        let v42 = v39;
        const v44 = [1337,1337];
        const v45 = {valueOf:1337,b:v10,e:1337,d:1337,constructor:v42,__proto__:1337,a:v39};
        const v47 = [1337,1337,1337,1337,1337];
        const v48 = [v47];
        const v49 = v44[-4096];
        const v50 = v41[-3357639552];
        const v51 = 13.37 == v41;
        let v53 = 0;
        const v54 = v23 - Uint8Array;
        const v55 = v42.flat();
        const v56 = v20();
        const v57 = v5 & v2;
        const v58 = v49[4];
        const v59 = (0)[v23];
        const v60 = v13();
        const v61 = v60[5];
        let v63 = 0;
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v68 = new Proxy(v18,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
