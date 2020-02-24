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
        const v21 = new Int8Array();
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v9 = v16;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
            let v31 = 0;
        } while (v28 < 4);
        let v34 = 65535;
        const v35 = v25.slice(v9,4);
        const v36 = v34 + 1;
        const v37 = [13.37];
        const v39 = [1337,13.37,v37,-1155643050];
        let v40 = v37;
        const v42 = [1337,1337];
        const v43 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v40,__proto__:1337,a:v37};
        const v45 = [1337,1337,1337,1337,1337];
        const v46 = [v45];
        const v47 = v42[-4096];
        const v48 = v39[-3357639552];
        const v49 = 13.37 < v39;
        const v51 = new Uint8Array();
        let v53 = 0;
        const v54 = v40.flat();
        v17[3] = v17;
        const v55 = v7();
        const v56 = v55[-2900725722];
        let v58 = undefined;
        function v59(v60,v61,v62,v63,v64) {
            'use strict'
            v58 = v23;
        }
    } catch(v65) {
        const v66 = {construct:v65};
    }
}
const v67 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,a:v13,setPrototypeOf:v13,has:v13};
const v69 = new Proxy(v12,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
