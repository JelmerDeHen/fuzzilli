function main() {
let v3 = 255;
const v6 = [13.37,13.37,13.37,13.37,13.37];
const v8 = [1337,1337,1337];
const v9 = ["valueOf",isNaN,-9007199254740991,v8];
const v10 = {c:v8,constructor:v8,valueOf:-9007199254740991,__proto__:v9,d:v9};
const v11 = {b:-9007199254740991,c:v9,valueOf:isNaN,e:v10};
let v12 = v8;
const v14 = [1337,1337];
const v16 = new ArrayBuffer();
const v17 = v16.slice();
let v19 = undefined;
const v23 = [1337,13.37,1337,Uint8Array];
let v24 = v23;
const v26 = [1337,1337,1337,1337,1337];
const v27 = {valueOf:v26,__proto__:v26};
let v29 = 13.37;
const v32 = [1337,1337,1337,1337,1337];
function v33(v34,v35,v36,v37) {
    'use strict'
    try {
        const v41 = [1337,1337];
        let v44 = 0;
        const v45 = v44 + 1;
        const v46 = new ArrayBuffer();
        v29 = v36;
        let v49 = 0;
        do {
            const v50 = v49 + 1;
            v49 = v50;
        } while (v49 < 4);
        let v53 = 0;
        const v54 = v46.slice(v29,4);
        const v55 = v53 + 1;
        const v56 = [13.37];
        const v58 = [1337,13.37,v56,-1155643050];
        let v59 = v56;
        const v61 = [1337,1337];
        const v62 = {valueOf:1337,b:v24,e:1337,d:1337,constructor:v59,__proto__:1337,a:v56};
        const v64 = [1337,1337,1337,1337,1337];
        const v65 = [v64];
        const v66 = v61[-4096];
        const v67 = v58[-3357639552];
        const v68 = 13.37 == v58;
        let v70 = 0;
        const v71 = v59.flat();
        v37[3] = v37;
        const v72 = v27();
        const v73 = v72[-2900725722];
        let v75 = 0;
    } catch(v76) {
        const v77 = {construct:v76};
    }
}
const v78 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v33,ownKeys:v33,setPrototypeOf:v33,has:v33};
const v80 = new Proxy(v32,v78);
v80[1] = "MIN_VALUE";
const v82 = [1337];
let v83 = v82;
let v85 = undefined;
let v87 = 0;
}
%NeverOptimizeFunction(main);
main();
