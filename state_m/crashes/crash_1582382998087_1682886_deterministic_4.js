function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [2653075825];
const v9 = [1337,13.37,1337,Uint8Array];
let v10 = v9;
const v12 = [1337,1337,1337,1337,1337];
const v13 = {valueOf:v12,__proto__:v12};
let v15 = 13.37;
const v18 = [1337,1337,1337,1337,1337];
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v27 = [1337,1337];
        const v29 = new ArrayBuffer();
        v15 = v22;
        let v32 = 0;
        do {
            const v36 = new Int16Array(7);
            v36.constructor = Int8Array;
            const v39 = v36.slice(-1024,2608792922);
            const v40 = v32 + 1;
            v32 = v40;
        } while (v32 < 4);
        let v43 = 0;
        const v44 = v29.slice(v15,4);
        const v45 = v43 + 1;
        const v46 = [13.37];
        const v48 = [1337,13.37,v46,-1155643050];
        let v49 = v46;
        const v51 = [1337,1337];
        const v52 = {valueOf:1337,b:v10,e:1337,d:1337,constructor:v49,__proto__:1337,a:v46};
        const v54 = [1337,1337,1337,1337,1337];
        const v55 = [v54];
        const v56 = v51[-4096];
        const v57 = v48[-3357639552];
        const v58 = 13.37 == v48;
        let v60 = 0;
        const v61 = v49.flat();
        v23[3] = v23;
        const v62 = v13();
        const v63 = v62[-2900725722];
        let v65 = 0;
    } catch(v66) {
        const v67 = {construct:v66};
    }
}
const v68 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v70 = new Proxy(v18,v68);
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
