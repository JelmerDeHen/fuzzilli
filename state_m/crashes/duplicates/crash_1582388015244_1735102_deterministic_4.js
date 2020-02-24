function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [1337,1073741824,v4,v4];
const v6 = {a:v5,e:1073741824,valueOf:v4,constructor:1073741824};
const v7 = {a:v6,e:v6,d:v2};
let v8 = v4;
let v10 = 13.37;
const v12 = [13.37,13.37];
const v13 = {b:v12};
const v20 = [1337,13.37,1337,Uint8Array];
const v22 = new Uint8Array();
let v23 = v20;
const v25 = [1337,1337,1337,1337,1337];
const v26 = {valueOf:v25,__proto__:v25};
let v28 = 13.37;
const v31 = [1337,1337,1337,1337,1337];
function v32(v33,v34,v35,v36) {
    'use strict'
    try {
        const v40 = [1337,1337];
        const v42 = new ArrayBuffer();
        v28 = v35;
        let v45 = 0;
        do {
            const v46 = v45 + 1;
            v45 = v46;
        } while (v45 < 4);
        let v48 = 0;
        const v49 = v42.slice(v28);
        const v50 = v48 + 1;
        const v51 = [13.37];
        const v53 = [1337,13.37,v51,-1155643050];
        let v54 = v51;
        const v56 = [1337,1337];
        const v57 = {valueOf:1337,b:v23,e:1337,d:1337,constructor:v54,__proto__:1337,a:v51};
        const v59 = new Int16Array();
        const v62 = v59.slice(10,1337);
        const v64 = [1337,1337,1337,1337,1337];
        const v65 = [v64];
        const v66 = v56[-4096];
        const v67 = v53[-3357639552];
        const v68 = 13.37 == v53;
        let v70 = 0;
        const v71 = v54.flat();
        v36[3] = v36;
        const v72 = v26();
        const v73 = v72[-2900725722];
        let v75 = 0;
    } catch(v76) {
        const v77 = {construct:v76};
    }
}
const v78 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
const v80 = new Proxy(v31,v78);
v80[1] = "MIN_VALUE";
const v82 = [2,1337];
const v83 = [Uint8ClampedArray,13.37,2];
let v84 = v82;
const v87 = Object.seal(v83,65537);
}
%NeverOptimizeFunction(main);
main();
