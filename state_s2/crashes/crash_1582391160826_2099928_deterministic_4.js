function main() {
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
        let v34 = 0;
        const v35 = v25.slice(v11,4);
        const v36 = v32 + 1;
        const v37 = [13.37];
        function v38(v39,v40,v41,v42,v43) {
            const v44 = {getOwnPropertyDescriptor:v43,apply:v42,deleteProperty:v17,isExtensible:v17,construct:v16,has:v42};
        }
        const v45 = typeof parseInt;
        const v47 = v45 === "string";
        let v48 = v17;
        if (v11) {
            const v49 = 13.37 && v9;
        } else {
            const v50 = v37 & v28;
        }
        const v51 = new ArrayBuffer();
        const v53 = [1337,13.37,v37,-1155643050];
        let v54 = v37;
        const v56 = [1337,1337];
        const v57 = {valueOf:1337,b:v6,e:1337,d:1337,constructor:v54,__proto__:1337,a:v37};
        const v59 = v19["MIN_VALUE"];
        const v60 = "symbol".__proto__;
        for (let v64 = 0; v64 < 100; v64++) {
            const v65 = v59();
        }
        const v66 = {apply:v38,construct:v15,get:v38,call:v59,isExtensible:v38,getPrototypeOf:v17,has:v11,set:v19,ownKeys:v38};
        const v68 = Proxy();
        const v69 = v19();
        const v70 = [1337,1337,1337,1337,1337];
        const v71 = [v70];
        const v72 = v56[-4096];
        const v73 = v53[-3357639552];
        const v74 = 13.37 == v53;
        let v76 = 0;
        const v77 = v54.flat();
        const v78 = v9();
        const v79 = v78[-2900725722];
        let v81 = 0;
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
