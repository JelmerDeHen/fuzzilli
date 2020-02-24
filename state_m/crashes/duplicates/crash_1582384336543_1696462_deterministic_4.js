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
        const v19 = new Uint8ClampedArray();
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v9 = v16;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v32 = 0;
        const v33 = v25.slice(v9,4);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v37[-3357639552];
        const v47 = 13.37 == v37;
        let v49 = 0;
        const v50 = v38.flat();
        v17[3] = v17;
        const v51 = v7();
        let v53 = undefined;
        function v54(v55,v56,v57,v58,v59) {
            'use strict'
            v53 = v23;
        }
        let v61 = 0;
    } catch(v62) {
        const v63 = {construct:v62};
        for (const v64 in v62) {
            const v65 = v3.entries();
        }
    }
}
const v66 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v68 = new Proxy(v12,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
