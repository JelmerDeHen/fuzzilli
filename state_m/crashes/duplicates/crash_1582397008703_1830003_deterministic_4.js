function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [1337,"undefined",v5];
const v7 = {c:v3,a:1337,__proto__:v6,constructor:v3,length:1337};
const v11 = [1337,13.37,1337,Uint8Array];
let v12 = v11;
const v14 = [1337,1337,1337,1337,1337];
const v15 = {valueOf:v14,__proto__:v14};
let v17 = 13.37;
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        const v29 = [1337,1337];
        const v31 = new ArrayBuffer();
        v17 = v24;
        let v34 = 0;
        do {
            const v35 = v34 + 1;
            v34 = v35;
        } while (v34 < 4);
        let v38 = 0;
        const v39 = v31.slice(v17,4);
        const v40 = v38 + 1;
        const v41 = [13.37];
        const v43 = [1337,13.37,v41,-1155643050];
        let v44 = v41;
        const v46 = [1337,1337];
        const v47 = {valueOf:1337,b:v12,e:1337,d:1337,constructor:v44,__proto__:1337,a:v41};
        const v49 = [1337,1337,1337,1337,1337];
        const v50 = [v49];
        const v51 = v46[-4096];
        const v52 = v43[-3357639552];
        const v53 = 13.37 == v43;
        let v55 = 0;
        const v56 = v44.flat();
        v25[3] = v25;
        const v57 = v15();
        const v58 = v57[-2900725722];
        let v61 = 255;
        const v62 = v61 + 1;
        let v63 = 0;
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v68 = new Proxy(v20,v66);
v68[1] = "MIN_VALUE";
const v69 = {length:1337,a:v5,c:"undefined"};
const v71 = [1337,1337,1337,1337];
const v72 = v71 + 1;
let v73 = 268435456;
const v75 = Int32Array();
const v76 = v75.slice();
let v78 = 0;
const v79 = v21();
const v80 = v78 + 1;
const v81 = ["undefined"];
const v82 = v21();
}
%NeverOptimizeFunction(main);
main();
