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
        const v23 = [10000];
        let v24 = v23;
        const v26 = [1337,Infinity,Infinity];
        const v27 = [v24,v26];
        const v28 = v27.toLocaleString();
        let v31 = -1709811117;
        const v33 = [13.37,13.37,v28];
        const v34 = JSON.stringify(v31);
        const v35 = JSON.parse(v34);
        const v36 = v33.forEach(parseInt);
        const v38 = [1337,1337];
        const v40 = new ArrayBuffer();
        v9 = v16;
        let v43 = 0;
        do {
            const v44 = v43 + 1;
            v43 = v44;
        } while (v43 < 4);
        let v46 = 0;
        const v47 = v40.slice(v9);
        const v48 = v46 + 1;
        const v49 = {};
        const v51 = [13.37,13.37,13.37,13.37];
        let v53 = -2;
        const v54 = v51.sort();
        const v55 = [13.37];
        const v57 = [1337,13.37,v55,-1155643050];
        let v58 = v55;
        const v60 = [1337,1337];
        const v61 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v58,__proto__:1337,a:v55};
        const v63 = [1337,1337,1337,1337,1337];
        const v64 = [v63];
        const v65 = v60[-4096];
        const v66 = v57[-3357639552];
        const v67 = 13.37 == v57;
        let v69 = 0;
        const v70 = v58.flat();
        v17[3] = v17;
        const v71 = v7();
        const v72 = v71[-2900725722];
    } catch(v73) {
        const v74 = {construct:v73};
    }
}
const v75 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v77 = new Proxy(v12,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
