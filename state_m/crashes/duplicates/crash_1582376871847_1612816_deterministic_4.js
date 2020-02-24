function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337,1337];
const v5 = [13.37];
const v6 = {valueOf:v5};
const v7 = {e:v5,a:"MIN_SAFE_INTEGER"};
let v8 = v5;
const v12 = [1337,13.37,1337,Uint8Array];
let v13 = v12;
const v17 = Symbol.toStringTag;
const v18 = Symbol[v17];
const v19 = {getPrototypeOf:v18,get:v18};
const v21 = new Proxy(eval,v19);
const v22 = [1337,1337,1337,1337];
let v23 = v22;
const v25 = new Uint8ClampedArray();
const v26 = v25.slice();
const v28 = [1337,1337,1337,1337,1337];
const v29 = {valueOf:v28,__proto__:v28};
let v31 = 13.37;
const v34 = [1337,1337,1337,1337,1337];
function v35(v36,v37,v38,v39) {
    'use strict'
    try {
        const v43 = [1337,1337];
        const v45 = new ArrayBuffer();
        v31 = v38;
        let v48 = 0;
        do {
            const v49 = v48 + 1;
            v48 = v49;
        } while (v48 < 4);
        let v51 = 0;
        const v52 = v45.slice(v31);
        const v53 = v51 + 1;
        const v54 = [13.37];
        const v56 = [1337,13.37,v54,-1155643050];
        let v57 = v54;
        const v59 = [1337,1337];
        const v62 = new Int32Array();
        const v64 = v62.slice(-30109.187644544523,1337);
        const v66 = [1337,1337,1337,1337,1337];
        const v67 = [v66];
        const v68 = v59[-4096];
        const v69 = v56[-3357639552];
        const v70 = 13.37 == v56;
        let v72 = 0;
        const v73 = v57.flat();
        v39[3] = v39;
        let v75 = undefined;
        let v77 = 0;
    } catch(v78) {
        const v79 = {construct:v78};
    }
    const v80 = v23.join();
    const v81 = v37 || v80;
}
const v82 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
const v84 = new Proxy(v34,v82);
v84[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
