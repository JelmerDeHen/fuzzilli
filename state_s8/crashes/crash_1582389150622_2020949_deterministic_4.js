function main() {
const v2 = {a:13.37};
const v6 = [1337,13.37,1337,Uint8Array];
let v7 = v6;
const v9 = [1337,1337,1337,1337,1337];
const v10 = {valueOf:v9,__proto__:v9};
let v12 = 13.37;
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v24 = [1337,1337];
        const v26 = new ArrayBuffer();
        v12 = v19;
        let v28 = 0;
        const v29 = v28 + 1;
        let v31 = 0;
        for (const v33 in "object") {
            const v35 = [1337,v33,1337,1337,1337];
            function v36(v37,v38,v39,v40) {
                'use strict'
                return v35;
            }
            const v41 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
            const v43 = new Proxy(v35,v41);
        }
        const v44 = v26.slice(v12);
        const v45 = "object" + 1;
        const v46 = [13.37];
        const v48 = [1337,13.37,v46,-1155643050];
        let v49 = v46;
        const v51 = [1337,1337];
        const v52 = {valueOf:1337,b:v7,e:1337,d:1337,constructor:v49,__proto__:1337,a:v46};
        const v54 = [1337,1337,1337,1337,1337];
        const v55 = [v54];
        const v56 = v51[-4096];
        const v57 = v48[-3357639552];
        const v58 = 13.37 == v48;
        let v60 = 0;
        const v61 = v49.flat();
        v20[3] = v20;
        const v62 = v10();
        const v63 = v62[-2900725722];
        let v64 = v2;
        const v65 = {preventExtensions:isNaN,isExtensible:v57,call:v17,deleteProperty:v18,defineProperty:v62,setPrototypeOf:v56};
        const v67 = Proxy();
        for (const v68 of v26) {
            let v70 = 0;
            const v71 = v68.concat();
            const v72 = v70 + 1;
        }
        function v73(v74,v75,v76,v77,v78) {
            'use strict'
            v64 = v24;
        }
    } catch(v79) {
        const v80 = {construct:v79};
    }
}
const v81 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v83 = new Proxy(v15,v81);
v83[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
