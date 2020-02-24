function main() {
const v3 = new ArrayBuffer();
const v4 = v3.slice();
const v5 = new DataView(v4);
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
            const v33 = v32 + 1;
            v32 = v33;
        } while (v32 < 4);
        let v36 = 0;
        do {
            const v37 = {__proto__:v22,toString:v22,e:-1155643050,d:v12,constructor:8,...1337,...v5,...v27,...13.37};
            const v38 = v36 + 1;
            v36 = v38;
        } while (v36 < 4);
        const v40 = new Float32Array();
        let v43 = 0;
        do {
            v36 = v9;
            const v44 = v43 + 1;
            v43 = v44;
        } while (v43 < 7);
        let v47 = 0;
        const v48 = v29.slice(v15,4);
        const v49 = v47 + 1;
        const v50 = [13.37];
        const v52 = [1337,13.37,v50,-1155643050];
        let v53 = v50;
        const v55 = [1337,1337];
        const v56 = {valueOf:1337,b:v10,e:1337,d:1337,constructor:v53,__proto__:1337,a:v50};
        const v58 = [1337,1337,1337,1337,1337];
        const v59 = [v58];
        const v60 = v55[-4096];
        const v61 = v52[-3357639552];
        const v62 = 13.37 == v52;
        let v64 = 0;
        const v65 = v53.flat();
        v23[3] = v23;
        const v66 = v13();
        const v67 = v66[-2900725722];
        let v69 = undefined;
        function v70(v71,v72,v73,v74,v75) {
            'use strict'
            return v22;
        }
        for (const v76 in v22) {
            const v77 = typeof 1337;
            const v79 = v77 === "object";
            let v80 = v79;
            const v81 = {get:v66,deleteProperty:v23,ownKeys:v23,defineProperty:v66,isExtensible:v70,preventExtensions:v19,setPrototypeOf:v70,getOwnPropertyDescriptor:v70,has:v66,construct:v20,call:v20};
            const v83 = Proxy();
            const v84 = v29.slice(1337);
        }
        const v85 = v65 instanceof v36;
        const v87 = Symbol.toPrimitive;
        const v88 = v13[v87];
        function v89(v90,v91,v92,v93,v94) {
            'use strict'
            v69 = v27;
        }
        const v95 = Uint8Array < v15;
        let v96 = "MIN_VALUE";
        let v97 = v61;
    } catch(v98) {
        const v99 = {construct:v98};
    }
}
const v100 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
const v102 = new Proxy(v18,v100);
v102[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
