function main() {
const v1 = [13.37];
const v2 = [];
let v3 = v1;
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
        let v33 = 0;
        const v34 = v27.slice(v13);
        const v35 = v33 + 1;
        const v36 = [13.37];
        const v38 = [1337,13.37,v36,-1155643050];
        let v39 = v36;
        const v41 = [1337,1337];
        const v42 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v39,__proto__:1337,a:v36};
        const v44 = [1337,1337,1337,1337,1337];
        const v45 = [v44];
        const v46 = v41[-4096];
        const v47 = v38[-3357639552];
        const v48 = 13.37 == v38;
        let v50 = 0;
        const v51 = v39.flat();
        v21[3] = v21;
        const v52 = v11();
        const v53 = v52[-2900725722];
        return v21;
        for (const v56 in v2) {
            const v57 = v53();
            const v58 = v56[v56];
        }
        let v60 = 0;
        let v61 = v52;
        const v62 = 100 != v3;
        const v63 = v46();
        const v64 = v60 + 1;
        for (let v68 = 0; v68 < 100; v68++) {
            const v69 = v20();
        }
        const v70 = v21 + 1;
        let v71 = 0;
    } catch(v72) {
        const v73 = {construct:v72};
    }
}
const v74 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v76 = new Proxy(v16,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
