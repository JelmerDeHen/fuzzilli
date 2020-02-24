function main() {
const v2 = [1337,1337];
const v3 = [v2,isNaN];
let v4 = v3;
const v8 = [1337,13.37,1337,DataView];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        let v24 = 0;
        const v25 = v24 + 1;
        const v26 = v4[1337];
        const v30 = [1337,1337];
        const v32 = new ArrayBuffer();
        v14 = v21;
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            v35 = v36;
        } while (v35 < 4);
        let v38 = 0;
        const v39 = v32.slice(v14);
        const v40 = v38 - 1;
        const v41 = [13.37];
        const v43 = [1337,13.37,v41,-1155643050];
        let v44 = v41;
        const v46 = [1337,1337];
        const v47 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v44,__proto__:1337,a:v41};
        const v49 = [1337,1337,1337,1337,1337];
        const v50 = [v49];
        const v51 = v46[-4096];
        const v52 = v43[-3357639552];
        const v53 = 13.37 == v43;
        let v55 = 0;
        const v56 = v44.flat();
        v22[3] = v22;
        const v57 = v12();
        const v58 = v57[-2900725722];
        let v60 = 0;
    } catch(v61) {
        const v62 = 1337 & v20;
        const v63 = typeof v61;
        const v65 = v63 === "symbol";
        let v66 = v63;
        let v68 = 0;
        let v69 = 13.37;
        const v70 = v61();
        const v71 = v68 + 1;
        const v72 = v61();
        const v73 = !v20;
        const v74 = {construct:v61};
    }
}
const v75 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v77 = new Proxy(v17,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
