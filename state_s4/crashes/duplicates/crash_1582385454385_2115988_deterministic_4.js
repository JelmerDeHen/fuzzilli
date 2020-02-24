function main() {
const v1 = [13.37,13.37,13.37];
const v2 = v1.slice();
for (const v3 of v2) {
}
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
        const v27 = new ArrayBuffer();
        v13 = v20;
        let v30 = 0;
        do {
            const v31 = v30 + 1;
            v30 = v31;
        } while (v30 < 4);
        let v34 = 0;
        const v35 = v27.slice(v13,4);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v40,__proto__:1337,a:v37};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        const v54 = [1337,1337,1337];
        const v56 = new Uint8Array();
        v21[3] = v21;
        const v57 = v11();
        const v58 = v57[-2900725722];
        let v60 = 0;
    } catch(v61) {
        const v62 = {construct:v61};
    }
}
const v63 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v65 = new Proxy(v16,v63);
v65[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
