function main() {
const v1 = [13.37];
const v3 = [1337,1337];
const v7 = [1337,13.37,1337,Uint8Array];
let v8 = v7;
const v10 = [1337,1337,1337,1337,1337];
const v11 = {valueOf:v10,__proto__:v10};
let v13 = 13.37;
for (const v15 of v11) {
}
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v13 = v21;
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
        const v42 = 4 - 1;
        const v43 = v40[4];
        const v45 = [1337,1337];
        const v46 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v48 = [1337,1337,1337,1337,1337];
        const v49 = [v48];
        const v50 = v45[-4096];
        const v51 = v40[-3357639552];
        const v52 = 13.37 == v40;
        let v54 = 0;
        const v55 = v41.flat();
        v22[3] = v22;
        const v56 = v11();
        const v57 = v56[-2900725722];
        let v59 = 0;
    } catch(v60) {
        const v61 = {construct:v60};
    }
}
const v62 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v64 = new Proxy(v17,v62);
v64[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
