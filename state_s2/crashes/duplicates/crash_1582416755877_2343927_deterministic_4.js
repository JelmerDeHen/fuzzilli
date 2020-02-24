function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v7 = [1337,13.37,1337,Uint8Array];
let v8 = v7;
const v10 = [1337,1337,1337,1337,1337];
const v11 = {valueOf:v10,__proto__:v10};
let v13 = 13.37;
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v25 = [1337,1337];
        let v27 = 13.37;
        const v28 = new ArrayBuffer();
        v13 = v20;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v35 = 0;
        const v36 = v28.slice(v13,4);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v43 = [1337,1337];
        const v44 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v46 = [1337,1337,1337,1337,1337];
        const v47 = [v46];
        const v48 = v43[-4096];
        const v49 = v40[-3357639552];
        const v50 = 13.37 == v40;
        let v52 = 0;
        const v53 = v41.flat();
        v21[3] = v21;
        const v54 = v11();
        const v55 = v54[-2900725722];
        for (let v59 = 0; v59 < 8; v59++) {
        }
        const v60 = v21();
        const v61 = v10.length;
        const v62 = v7[v48];
        for (const v63 of v1) {
            const v64 = v3 == v50;
        }
        let v66 = 0;
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v71 = new Proxy(v16,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
