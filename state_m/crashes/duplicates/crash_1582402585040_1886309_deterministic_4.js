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
        const v21 = [1337,1337];
        const v23 = new ArrayBuffer();
        v9 = v16;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        let v30 = 0;
        const v31 = v23.slice(v9,4);
        let v34 = 0;
        do {
            const v35 = v31[1337];
            const v36 = v34 + 1;
            v34 = v36;
        } while (v34 < 3);
        const v37 = v30 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v44 = [1337,1337];
        const v46 = [1337,1337];
        const v48 = new ArrayBuffer();
        const v49 = v48.slice();
        let v51 = undefined;
        function v52(v53,v54) {
        }
        const v56 = [1337];
        let v57 = v56;
        const v58 = v52();
        const v59 = v52();
        const v60 = [1337,1337];
        const v61 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v63 = [1337,1337,1337,1337,1337];
        const v64 = [v63];
        const v65 = v60[-4096];
        const v66 = v40[-3357639552];
        const v67 = 13.37 == v40;
        let v69 = 0;
        const v70 = v41.flat();
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
