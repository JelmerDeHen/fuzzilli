function main() {
const v1 = [1337,1337];
const v5 = [1337,13.37,1337,Uint8Array];
let v6 = v5;
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
let v11 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v11 = v18;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v32 = 0;
        const v33 = v25.slice(v11,4);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v37[-3357639552];
        const v47 = 13.37 == v37;
        const v52 = [13.37];
        const v54 = [1337,1337];
        const v55 = [1337,"undefined",-3315064321,-3315064321];
        const v56 = {b:"undefined",length:1337,constructor:-3315064321};
        const v57 = {b:"undefined",__proto__:-3315064321,a:v56,constructor:v52,valueOf:v54};
        const v58 = v1.unshift();
        const v60 = new Float32Array();
        let v61 = 1337;
        function v62(v63,v64) {
        }
        const v66 = [1337];
        let v67 = v66;
        const v68 = v62();
        const v69 = v62();
        let v70 = 0;
        const v71 = v38.flat();
        v19[3] = v19;
        const v72 = v9();
        const v73 = v72[-2900725722];
        let v75 = undefined;
        let v77 = 0;
        const v78 = v18();
        const v79 = v77 + 1;
        const v80 = v44.constructor;
        const v81 = v56.delete();
    } catch(v82) {
        const v83 = {construct:v82};
    }
}
const v84 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
const v86 = new Proxy(v14,v84);
v86[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
