function main() {
const v4 = new Int16Array();
const v5 = [13.37,13.37,13.37];
const v7 = [1337];
const v8 = [13.37];
const v9 = {b:v5,__proto__:Int16Array,c:v8,length:isNaN};
const v10 = {b:v5,b:isNaN,a:"string"};
const v14 = [1337,13.37,1337,Uint8Array];
let v15 = v14;
const v17 = [1337,1337,1337,1337,1337];
const v18 = {valueOf:v17,__proto__:v17};
let v20 = 13.37;
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        const v32 = [1337,1337];
        const v34 = new ArrayBuffer();
        v20 = v27;
        let v37 = 0;
        do {
            const v38 = v37 + 1;
            v37 = v38;
        } while (v37 < 4);
        let v40 = 0;
        const v41 = v34.slice(v20);
        const v42 = v40 + 1;
        const v43 = [13.37];
        const v45 = [1337,13.37,v43,-1155643050];
        let v46 = v43;
        const v48 = [1337,1337];
        const v49 = {valueOf:1337,b:v15,e:1337,d:1337,constructor:v46,__proto__:1337,a:v43};
        const v51 = [1337,1337,1337,1337,1337];
        const v52 = [v51];
        const v53 = v48[-4096];
        const v54 = v45[-3357639552];
        const v55 = 13.37 == v45;
        let v57 = 0;
        const v58 = v46.flat();
        v28[3] = v28;
        const v59 = v18();
        const v60 = v59[-2900725722];
        let v62 = undefined;
        function v63(v64,v65,v66,v67,v68) {
            'use strict'
            v62 = v32;
        }
        let v70 = 0;
        let v72 = 0;
        for (const v73 of v26) {
            for (const v74 in v27) {
                const v75 = v73.setInt16();
            }
        }
        const v76 = v72 + 1;
        function v77(v78,v79,v80,v81,v82) {
            'use strict'
            const v83 = v14 << v53;
        }
    } catch(v84) {
        const v85 = {construct:v84};
    }
}
const v86 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v88 = new Proxy(v23,v86);
v88[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
