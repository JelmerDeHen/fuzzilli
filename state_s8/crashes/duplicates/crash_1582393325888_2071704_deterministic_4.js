function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {a:1337,b:3,d:"number",toString:13.37,constructor:"number"};
const v8 = {a:v6,b:v3};
let v9 = 1337;
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
        let v34 = 0;
        const v35 = new Int16Array();
        const v36 = v35.slice();
        const v38 = new ArrayBuffer();
        v19 = v26;
        let v41 = 0;
        do {
            const v42 = v41 + 1;
            v41 = v42;
        } while (v41 < 4);
        let v44 = 0;
        const v45 = v38.slice(v19);
        const v46 = v44 + 1;
        const v47 = [13.37];
        const v49 = [1337,13.37,v47,-1155643050];
        let v50 = v47;
        const v52 = [1337,1337];
        const v53 = {valueOf:1337,b:v14,e:1337,d:1337,constructor:v50,__proto__:1337,a:v47};
        const v55 = [1337,1337,1337,1337,1337];
        const v56 = [v55];
        const v57 = v52[-4096];
        const v58 = v49[-3357639552];
        const v59 = 13.37 == v49;
        let v61 = 0;
        const v62 = v50.flat();
        v27[3] = v27;
        const v63 = v17();
        const v64 = v63[-2900725722];
        let v66 = 0;
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v23,set:v23,getPrototypeOf:v23,call:v23,preventExtensions:v23,isExtensible:v23,construct:v23,get:v23,ownKeys:v23,setPrototypeOf:v23,has:v23};
const v71 = new Proxy(v22,v69);
v71[1] = "MIN_VALUE";
const v73 = Int32Array();
const v74 = v73.slice();
const v75 = v3.flatMap();
let v78 = 0;
const v79 = v14[10];
const v80 = v78 + 1;
const v81 = v23(1337,1337,v3,9);
}
%NeverOptimizeFunction(main);
main();
