function main() {
const v2 = [1337,1337,1337,1337,1337];
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    const v14 = [1337,13.37,1337,Uint8Array];
    let v15 = v14;
    const v17 = [1337,1337,1337,1337,1337];
    const v18 = {valueOf:v17,__proto__:v17};
    let v20 = 13.37;
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            const v32 = [1337,1337];
            const v34 = new ArrayBuffer();
            v20 = v27;
            let v37 = 0;
            do {
                const v38 = v37 + 1;
                v37 = v38;
            } while (v37 < 4);
            let v41 = 0;
            const v42 = v34.slice(v20,4);
            const v43 = v41 + 1;
            const v44 = [13.37];
            const v46 = [1337,13.37,v44,-1155643050];
            let v47 = v44;
            const v49 = [1337,1337];
            const v50 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v47,__proto__:1337,a:v44};
            const v52 = [1337,1337,1337,1337,1337];
            const v53 = [v52];
            const v54 = v49[-4096];
            const v55 = v46[-3357639552];
            const v56 = 13.37 == v46;
            let v58 = 0;
            const v59 = v47.flat();
            v28[3] = v28;
            const v60 = v18();
            const v61 = v60[-2900725722];
            let v63 = 0;
        } catch(v64) {
            const v65 = {construct:v64};
        }
    }
    const v66 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v68 = new Proxy(v23,v66);
    v68[1] = "MIN_VALUE";
}
const v69 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:8,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v71 = new Proxy(v5,v69);
function v72(v73,v74,v75,v76) {
    'use strict'
    const v79 = parseInt.e;
    const v80 = parseInt[v79];
    const v81 = {getPrototypeOf:v80,get:v80};
    const v83 = new Proxy(Reflect,v81);
    Object.__proto__ = v83;
}
const v85 = {deleteProperty:v72,set:v72,getPrototypeOf:v72,call:v72,preventExtensions:v72,isExtensible:v72,construct:v72,get:v72,ownKeys:v72,setPrototypeOf:1337,has:v72};
const v87 = new Proxy(v2,v85);
v87[1] = "MIN_VALUE";
let v88 = v71;
const v91 = new Proxy(v88,Object);
const v93 = Symbol.species;
v91[v93] = v72;
}
%NeverOptimizeFunction(main);
main();
