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
        const v24 = new ArrayBuffer();
        const v26 = v24.slice();
        let v30 = 0;
        do {
            v24.__proto__ = v12;
            const v31 = v30 + 1;
            v30 = v31;
        } while (v30 < 6);
        const v32 = v26.slice(v16,1337);
        const v33 = new ArrayBuffer(v17);
        let v34 = undefined;
        const v35 = DataView();
        const v36 = [13.37];
        const v38 = [1337,13.37,v36,-1155643050];
        let v39 = v36;
        const v41 = [1337,1337];
        const v42 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v39,__proto__:1337,a:v36};
        const v44 = [1337,1337,1337,1337,1337];
        const v45 = [v44];
        const v46 = v41[2609233507];
        const v47 = v38[-3357639552];
        const v48 = 13.37 == v38;
        let v50 = 0;
        const v51 = v39.flat();
        const v52 = v50 + 1;
        const v53 = v7();
        const v54 = v53[-2900725722];
        const v56 = [863175818];
        let v57 = v56;
        let v59 = undefined;
        let v61 = 0;
        const v62 = !v15;
        let v63 = v9;
        for (const v64 in v54) {
            const v66 = Symbol.search;
        }
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v71 = new Proxy(v12,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
