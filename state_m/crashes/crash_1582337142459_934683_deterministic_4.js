function main() {
const v4 = {b:128,c:13.37};
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = WeakMap[1337];
const v13 = {valueOf:v11,__proto__:v11};
let v15 = 13.37;
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        let v28 = 0;
        do {
            let v31 = 0;
            while (v31 < 0) {
                let v32 = 1337;
                if (v12) {
                } else {
                    for (const v33 of v4) {
                        const v34 = 1337 | 1337;
                    }
                    v32 = -1155643050;
                }
                const v35 = v31 + 1;
                v31 = v35;
            }
            const v36 = v28 + 1;
            v28 = v36;
        } while (v28 < 10);
        const v38 = [1337,1337];
        const v40 = new ArrayBuffer();
        v15 = v22;
        let v43 = 0;
        do {
            const v44 = v43 + 1;
            v43 = v44;
        } while (v43 < 4);
        let v47 = 256;
        const v48 = v40.slice(v15,4);
        const v49 = v47 + 1;
        const v50 = [13.37];
        const v52 = [1337,13.37,v50,-1155643050];
        let v53 = v50;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v53,__proto__:1337,a:v50};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[256];
        const v61 = v52[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        v23[3] = v23;
        const v66 = v13();
        const v67 = v66[-2900725722];
        let v69 = 0;
    } catch(v70) {
        const v71 = {construct:v70};
    }
}
const v72 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v74 = new Proxy(v18,v72);
v74[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
