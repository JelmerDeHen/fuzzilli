function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v6 = [1337,13.37,1337,Uint8Array];
let v7 = v6;
const v9 = [1337,1337,1337,1337,1337];
const v10 = {valueOf:v9,__proto__:v9};
const v11 = {get:isFinite,set:isFinite};
let v13 = 13.37;
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    try {
        const v25 = [1337,1337];
        const v27 = new ArrayBuffer();
        v13 = v20;
        const v31 = [1337,1337,1337,1337,1337];
        let v32 = v31;
        const v34 = [v32,13.37,13.37,13.37,13.37];
        const v36 = {get:isFinite};
        const v38 = Object.defineProperty(v1,"b",v36);
        let v41 = 0;
        while (v41 < 6) {
            const v42 = v11.set(13.37);
            const v43 = v41 + 1;
            v41 = v43;
        }
        const v45 = v34.forEach(Symbol);
        let v46 = 0;
        do {
            const v47 = v46 + 1;
            v46 = v47;
        } while (v46 < 4);
        let v50 = 0;
        const v51 = v27.slice(v13,4);
        const v52 = v50 + 1;
        const v53 = [13.37];
        const v54 = new ArrayBuffer();
        const v55 = "b" == v21;
        let v57 = 0;
        const v58 = v41 < v21;
        const v59 = v57 + 1;
        const v60 = v52 > v18;
        let v61 = v6;
        const v62 = {e:v55,__proto__:v21,constructor:v36,d:v57};
        const v63 = (4)[v61];
        const v65 = [1337,13.37,v53,-1155643050];
        let v66 = v53;
        const v68 = [1337,1337];
        const v69 = {valueOf:1337,b:v7,e:1337,d:1337,constructor:v66,__proto__:1337,a:v53};
        const v71 = [1337,1337,1337,1337,1337];
        const v72 = [v71];
        const v73 = v68[-4096];
        const v74 = v65[-3357639552];
        const v75 = 13.37 == v65;
        let v77 = 0;
        const v78 = v66.flat();
        const v79 = v10();
        const v80 = v79[-2900725722];
    } catch(v81) {
        const v82 = {construct:v81};
    }
}
const v83 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v85 = new Proxy(v16,v83);
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
