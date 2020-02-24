function main() {
let v6 = 0;
while (v6 < 1337) {
    const v7 = v6 + 1;
    v6 = v7;
}
const v8 = [1337,1337,1337,1337,1337];
const v9 = ["undefined",-2571933196,Math,v8];
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
const v22 = [1337,1337,1337,1337,1337];
function v23(v24,v25,v26,v27) {
    'use strict'
    try {
        const v31 = [1337,1337];
        const v33 = new ArrayBuffer();
        v19 = v26;
        let v36 = 0;
        do {
            const v37 = v36 + 1;
            v36 = v37;
        } while (v36 < 4);
        const v40 = [1337,1337,1337,1337];
        let v41 = 0;
        const v42 = v33.slice(v19);
        const v43 = v41 + 1;
        const v44 = [13.37];
        const v46 = [1337,13.37,v44,-1155643050];
        let v47 = v44;
        const v49 = [1337,1337];
        const v50 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v47,__proto__:1337,a:v44};
        const v52 = [1337,1337,1337,1337,1337];
        const v53 = [v52];
        const v54 = v49[-4096];
        const v55 = v46[-3357639552];
        const v56 = 13.37 == v46;
        let v58 = 0;
        const v59 = v47.flat();
        v27[3] = v27;
        for (const v60 in v55) {
            const v61 = v42.__proto__;
        }
        const v62 = [...v24,...v9];
        const v63 = v17();
        let v65 = undefined;
        function v66(v67,v68,v69,v70,v71) {
            'use strict'
            const v72 = v66[v25];
            v65 = v31;
        }
    } catch(v73) {
        const v74 = {construct:v73};
    }
}
const v75 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v77 = new Proxy(v22,v75);
v77[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
