function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [13.37,"POSITIVE_INFINITY",13.37,String];
const v7 = {c:"POSITIVE_INFINITY"};
const v8 = {d:13.37,valueOf:13.37,b:"POSITIVE_INFINITY"};
let v9 = 13.37;
const v13 = [1337,13.37,1337,Uint8Array];
let v14 = v13;
const v16 = [1337,1337,1337,1337,1337];
const v17 = {valueOf:v16,__proto__:v16};
let v19 = 13.37;
const v22 = [1337,1337];
const v24 = new ArrayBuffer();
const v25 = v24.slice();
let v27 = undefined;
const v29 = [1337];
let v30 = v29;
let v32 = undefined;
let v34 = 0;
const v36 = [1337,1337,1337,1337,1337];
function v37(v38,v39,v40,v41) {
    'use strict'
    try {
        const v45 = [1337,1337];
        const v47 = new ArrayBuffer();
        v19 = v40;
        let v50 = 0;
        do {
            const v51 = v50 + 1;
            v50 = v51;
        } while (v50 < 4);
        let v53 = 0;
        const v54 = v47.slice(v19);
        const v55 = v53 + 1;
        const v56 = [13.37];
        const v58 = [1337,13.37,v56,-1155643050];
        let v59 = v56;
        const v61 = [1337,1337];
        const v63 = [1337,1337,1337,1337,1337];
        const v64 = [v63];
        const v65 = v61[-4096];
        const v66 = v58[-3357639552];
        const v67 = 13.37 == v58;
        let v69 = 0;
        const v70 = v59.flat();
        const v72 = new Float32Array();
        const v75 = v72.slice(1024,234126503);
        v41[3] = v41;
        const v76 = v17();
        const v77 = v76[-2900725722];
        let v79 = undefined;
        let v81 = 0;
    } catch(v82) {
        const v83 = {construct:v82};
    }
}
const v84 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
const v86 = new Proxy(v36,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
