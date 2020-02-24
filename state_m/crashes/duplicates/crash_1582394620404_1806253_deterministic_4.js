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
        const v27 = {c:"function"};
        const v29 = RegExp();
        let v30 = 0;
        do {
            const v31 = new RegExp();
            const v32 = v30 + 1;
            v30 = v32;
        } while (v30 < 4);
        let v34 = 0;
        const v35 = v23.slice(v9);
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
        const v49 = 13.37 == v39;
        let v51 = 0;
        const v52 = v40.flat();
        v17[3] = v17;
        const v53 = v7();
        const v54 = v53[-2900725722];
        let v56 = undefined;
        let v58 = 0;
        for (const v59 of v21) {
            const v60 = v46 << v27;
        }
        const v61 = v58 + 1;
        const v62 = ArrayBuffer();
        let v64 = 0;
    } catch(v65) {
        const v66 = {construct:v65};
    }
}
const v67 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v69 = new Proxy(v12,v67);
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
