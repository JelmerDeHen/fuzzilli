function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37];
const v7 = {toString:"e"};
const v8 = {toString:v7};
let v9 = 257;
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
        let v39 = 0;
        const v40 = v33.slice(v19);
        const v41 = v39 + 1;
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v47 = [1337,1337];
        const v48 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v45,__proto__:1337,a:v42};
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v50];
        const v52 = v47[-4096];
        const v53 = v44[-3357639552];
        const v54 = 13.37 == v44;
        let v56 = 0;
        const v57 = v45.flat();
        v27[3] = v27;
        const v58 = v17();
        const v59 = v58[-2900725722];
        const v62 = Uint8Array();
        const v65 = v62.slice(-268435456,1337);
        let v66 = 0;
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v71 = new Proxy(v22,v69);
v71[1] = "MIN_VALUE";
let v73 = 0;
let v75 = 0;
const v76 = {valueOf:0,preventExtensions:"MIN_VALUE",b:1337,toString:v73};
const v77 = v75 + 1;
const v78 = v73 + 1;
const v79 = v71(1337,1337,v13,Proxy);
for (let v83 = 0; v83 < 7; v83++) {
}
}
%NeverOptimizeFunction(main);
main();
