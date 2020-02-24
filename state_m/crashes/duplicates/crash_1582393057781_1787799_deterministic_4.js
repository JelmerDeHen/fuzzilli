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
        const v22 = [1337,1337];
        const v24 = new ArrayBuffer();
        const v25 = v24.slice();
        let v27 = undefined;
        function v28(v29,v30) {
        }
        const v32 = [1337];
        let v33 = v32;
        const v34 = v28();
        const v35 = [1337,1337];
        const v37 = new ArrayBuffer();
        v9 = v16;
        let v40 = 0;
        do {
            const v41 = v40 + 1;
            v40 = v41;
        } while (v40 < 4);
        let v43 = 0;
        const v44 = v37.slice(v9);
        const v45 = v43 + 1;
        const v46 = [13.37];
        const v48 = [1337,13.37,v46,-1155643050];
        let v49 = v46;
        const v51 = [1337,1337];
        const v52 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v49,__proto__:1337,a:v46};
        const v54 = [1337,1337,1337,1337,1337];
        const v55 = [v54];
        const v56 = v51[-4096];
        const v57 = v48[-3357639552];
        const v58 = 13.37 == v48;
        let v60 = 0;
        const v61 = v49.flat();
        v17[3] = v17;
        const v62 = v7();
        const v63 = v62[-2900725722];
        let v65 = undefined;
        function v66(v67,v68,v69,v70,v71) {
            'use strict'
            v65 = v35;
        }
    } catch(v72) {
        const v73 = {construct:v72};
    }
}
const v74 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v76 = new Proxy(v12,v74);
v76[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
