function main() {
const v3 = [1337,13.37,1337,Uint8Array];
let v4 = v3;
const v6 = [1337,1337,1337,1337,1337];
const v7 = {valueOf:v6,__proto__:v6};
let v9 = 13.37;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v20 = [1337,1337];
        const v23 = new ArrayBuffer();
        v9 = v15;
        let v26 = 0;
        do {
            const v27 = v26 + 1;
            v26 = v27;
        } while (v26 < 4);
        const v28 = [];
        const v30 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
        const v32 = [1337,1337];
        try {
            const v35 = [-2.220446049250313e-16,-2.220446049250313e-16];
            let v36 = v35;
            const v38 = Float32Array();
            const v39 = v38.slice();
            const v40 = ArrayBuffer();
            let v42 = 0;
        } catch(v43) {
        }
        const v44 = v32 == v28;
        let v45 = v44;
        let v47 = 0;
        const v48 = v47 + 1;
        let v50 = 1337;
        const v51 = v23.slice(v9,4);
        const v52 = v50 + 1;
        const v53 = [13.37];
        const v55 = [1337,13.37,v53,-1155643050];
        let v56 = v53;
        const v58 = [1337,1337];
        const v62 = 2.2250738585072014e-308 / 9007199254740991;
        const v63 = [v62];
        let v65 = 0;
        const v66 = v65 + 1;
        const v67 = new Uint16Array();
        const v68 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v56,__proto__:1337,a:v53};
        const v70 = [1337,1337,1337,1337,1337];
        const v71 = [v70];
        const v72 = v58[-4096];
        const v73 = v55[-3357639552];
        const v74 = 13.37 == v55;
        let v75 = 13.37;
        const v76 = v56.flat();
        v16[3] = v16;
        const v77 = v7();
        const v78 = v77[-2900725722];
        let v80 = 0;
    } catch(v81) {
        const v82 = {construct:v81};
    }
}
const v83 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v85 = new Proxy(v11,v83);
v85[1] = v7;
}
%NeverOptimizeFunction(main);
main();
