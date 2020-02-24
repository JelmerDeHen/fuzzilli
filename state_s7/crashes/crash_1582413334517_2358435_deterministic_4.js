function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337];
const v5 = [v2,v2];
const v6 = {};
const v7 = {b:v6,e:1337,d:v2,valueOf:1337,length:"d"};
let v8 = v5;
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
        const v42 = new Uint16Array();
        let v43 = 0;
        const v44 = v34.slice(v20,4);
        const v45 = v43 + 1;
        const v46 = [13.37];
        const v48 = [1337,13.37,v46,-1155643050];
        let v49 = v46;
        const v51 = [1337,1337];
        const v52 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v49,__proto__:1337,a:v46};
        const v54 = [1337,1337,1337,1337,1337];
        const v55 = [v54];
        const v56 = v51[-4096];
        const v57 = v48[-3357639552];
        const v58 = 13.37 == v48;
        let v60 = 0;
        const v61 = v49.flat();
        v28[3] = v28;
        const v62 = v18();
        const v63 = v62[-2900725722];
        let v65 = 0;
    } catch(v66) {
        const v70 = [1468489541,-1000000.0,2];
        const v71 = {construct:v66};
    }
}
const v72 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v74 = new Proxy(v23,v72);
v74[1] = "MIN_VALUE";
const v75 = [13.37,13.37,9007199254740992,13.37,13.37];
let v76 = v75;
const v79 = Float32Array();
const v80 = Int8Array();
let v82 = 0;
const v83 = v82 + 1;
const v84 = {constructor:v18,valueOf:v79,length:v80};
const v85 = v24(v18,v76,v4);
}
%NeverOptimizeFunction(main);
main();
