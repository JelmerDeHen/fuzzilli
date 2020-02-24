function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [13.37,-1,v5,Int8Array];
const v7 = {};
const v8 = {c:Int8Array};
const v12 = [1337,13.37,1337,Uint8Array];
let v13 = v12;
const v15 = [1337,1337,1337,1337,1337];
const v16 = {valueOf:v15,__proto__:v15};
let v18 = 13.37;
const v21 = [1337,1337,1337,1337,1337];
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        const v30 = [1337,1337];
        const v32 = new ArrayBuffer();
        v18 = v25;
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            v35 = v36;
        } while (v35 < 4);
        let v39 = 0;
        const v40 = v32.slice(v18,4);
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
        const v48 = v24.byteLength;
        const v49 = v24[1888375179];
        for (const v50 in v47) {
            const v51 = v26.E;
        }
        const v54 = [];
        const v55 = {__proto__:9007199254740991,length:16,constructor:16,a:v54};
        const v57 = Uint16Array();
        const v58 = {get:v48};
        const v60 = Object.defineProperty();
        const v61 = {valueOf:1337,b:v13,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
        const v63 = [1337,1337,1337,1337,1337];
        const v64 = [v63];
        const v65 = v47[-4096];
        const v66 = v44[-3357639552];
        const v67 = 13.37 == v44;
        let v69 = 0;
        const v70 = v45.flat();
        const v71 = v16();
        const v72 = v71[-2900725722];
        let v74 = undefined;
        function v75(v76,v77,v78,v79,v80) {
            'use strict'
            v74 = v30;
            return v40;
        }
        let v82 = 0;
    } catch(v83) {
        const v84 = {construct:v83};
    }
}
const v85 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v87 = new Proxy(v21,v85);
v87[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
