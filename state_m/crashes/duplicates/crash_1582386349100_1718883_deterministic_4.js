function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v14 = v21;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v34 = 0;
        const v35 = v28.slice(v14);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v40,__proto__:1337,a:v37};
        const v45 = [13.37,13.37,13.37];
        const v47 = [1337,1337,1337,1337,1337];
        const v48 = [v47];
        const v49 = v42[-4096];
        let v51 = -128;
        const v52 = v51 + 1;
        const v53 = v39[-3357639552];
        const v54 = 13.37 == v39;
        let v56 = 0;
        const v57 = v40.flat();
        v22[3] = v22;
        const v58 = v12();
        const v59 = v58[-2900725722];
        let v61 = undefined;
    } catch(v62) {
        const v63 = {construct:v62};
    }
}
const v64 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v66 = new Proxy(v17,v64);
v66[1] = "MIN_VALUE";
for (const v67 of Symbol) {
}
}
%NeverOptimizeFunction(main);
main();
