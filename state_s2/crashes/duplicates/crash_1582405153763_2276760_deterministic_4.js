function main() {
const v1 = [1337,1337,1337];
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v23 = [1337,1337];
        const v26 = new Uint16Array();
        const v27 = v26.slice();
        const v28 = new ArrayBuffer();
        v11 = v18;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v35 = 0;
        const v36 = v28.slice(v11,4);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v43 = [1337,1337];
        const v44 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v46 = [1337,1337,1337,1337,1337];
        const v47 = [v46];
        const v48 = v43[-4096];
        const v49 = v40[-3357639552];
        const v50 = 13.37 == v40;
        let v52 = 0;
        const v53 = v41.flat();
        v19[3] = v19;
        const v54 = v9();
        const v55 = v54[-2900725722];
        let v57 = 0;
    } catch(v58) {
        const v59 = {construct:v58};
    }
}
const v60 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v62 = new Proxy(v14,v60);
v62[1] = "MIN_VALUE";
const v64 = Proxy();
for (const v65 of v64) {
}
}
%NeverOptimizeFunction(main);
main();
