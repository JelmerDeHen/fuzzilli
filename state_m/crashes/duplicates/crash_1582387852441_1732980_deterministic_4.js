function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [1337];
const v7 = {b:v5,e:v3,valueOf:9007199254740992,constructor:1337,c:v6,toString:9007199254740992};
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
        const v41 = v5[-128];
        const v42 = v15 == v38;
        let v43 = v7;
        let v44 = 9007199254740992;
        try {
            const v45 = v41 % v14;
        } catch(v46) {
        }
        const v47 = !"caller";
        const v48 = [13.37];
        const v50 = [1337,13.37,v48,-1155643050];
        let v51 = v48;
        const v53 = [1337,1337];
        const v54 = {valueOf:1337,b:v12,e:1337,d:1337,constructor:v51,__proto__:1337,a:v48};
        const v56 = [1337,1337,1337,1337,1337];
        const v57 = [v56];
        const v58 = v53[-4096];
        const v59 = v50[-3357639552];
        const v60 = 13.37 == v50;
        const v63 = new Uint8ClampedArray();
        const v64 = v63.slice();
        let v65 = 0;
        const v66 = v51.flat();
        v25[3] = v25;
        const v67 = v15();
        const v68 = v67[-2900725722];
        let v70 = 0;
    } catch(v71) {
        const v72 = {construct:v71};
    }
}
const v73 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v75 = new Proxy(v20,v73);
v75[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
