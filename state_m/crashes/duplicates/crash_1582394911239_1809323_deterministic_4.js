function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v21 = new ArrayBuffer();
        let v24 = 0;
        while (v24 < 10) {
            const v25 = v24 + 1;
            v24 = v25;
        }
        v9 = v16;
        let v27 = 0;
        const v28 = v27 + 1;
        let v30 = 0;
        const v31 = v21.slice(v9);
        const v32 = v30 + 1;
        let v34 = -993177.2449491326;
        const v37 = [13.37,13.37,-4294967297,-4294967297];
        const v39 = [v37,-9007199254740992,v37];
        let v41 = 0;
        const v42 = v39.push();
        const v43 = v42 + 1;
        const v45 = new Int8Array();
        const v46 = v45.slice();
        const v47 = [13.37];
        const v49 = [4,13.37,v47,-1155643050];
        let v50 = v47;
        const v52 = [1337,1337];
        const v53 = {valueOf:4,b:v4,e:1337,d:1337,constructor:v50,__proto__:1337,a:v47};
        const v55 = [1337,1337,1337,1337,1337];
        const v56 = [v55];
        const v57 = v52[-4096];
        const v58 = v49[-3357639552];
        const v59 = 13.37 == v49;
        let v61 = 0;
        const v62 = v50.flat();
        v17[3] = v17;
        const v63 = v7();
    } catch(v64) {
        const v65 = {construct:v64};
    }
}
const v66 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v68 = new Proxy(v12,v66);
v68[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
