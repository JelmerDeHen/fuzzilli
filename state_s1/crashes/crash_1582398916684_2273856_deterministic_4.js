function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [13.37,1337,v1];
const v8 = [1337,13.37,1337,Uint8Array];
let v9 = v8;
const v11 = [1337,1337,1337,1337,1337];
const v12 = {valueOf:v11,__proto__:v11};
let v14 = 13.37;
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v14 = v21;
        let v29 = v22;
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 4);
        let v35 = 0;
        const v36 = v28.slice(v14);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        let v41 = v38;
        const v43 = [1337,1337];
        const v44 = {valueOf:1337,b:v9,e:1337,d:1337,constructor:v41,__proto__:1337,a:v38};
        const v46 = [1337,1337,1337,1337,1337];
        const v47 = [v46];
        const v48 = v43[-4096];
        const v49 = v40[-3357639552];
        const v50 = 13.37 == v40;
        const v51 = v20 === v32;
        const v52 = v32 == v49;
        let v53 = v19;
        if (v49) {
            let v55 = 0;
            const v56 = {};
            const v57 = [v56,v56,v56,v56];
            const v58 = v55 + 1;
            const v59 = v18();
            const v60 = v14();
            let v62 = 0;
            const v63 = v22.toLocaleString();
        } else {
            const v65 = {get:v48};
            const v67 = Object.defineProperty(v3,-4294967296,v65);
        }
        const v68 = {getOwnPropertyDescriptor:v48,construct:v18,set:v20,defineProperty:v48,ownKeys:v20,apply:v14};
        const v70 = Proxy();
        let v72 = 0;
        const v73 = v12();
        const v74 = v73[-2900725722];
        let v76 = undefined;
        const v77 = v22.getUint32();
        let v79 = 0;
    } catch(v80) {
        const v81 = {construct:v80};
    }
}
const v82 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v84 = new Proxy(v17,v82);
v84[1] = "MIN_VALUE";
const v85 = v4.copyWithin(v84);
}
%NeverOptimizeFunction(main);
main();
