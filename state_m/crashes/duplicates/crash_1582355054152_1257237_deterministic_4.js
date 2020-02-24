function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [];
const v6 = {__proto__:v5,b:WeakSet,toString:1337,e:v2,c:v2,constructor:v4};
const v7 = {toString:v5,a:v5,valueOf:13.37};
let v8 = v4;
function v13(v14,v15,v16,v17) {
    'use strict'
}
const v18 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v20 = new Proxy(RegExp,v18);
let v22 = 13.37;
const v25 = [13.37,13.37,-4294967297,-4294967297];
const v27 = [v25,5,v25];
const v28 = [1337,13.37,1337,Uint8Array];
let v29 = v28;
const v31 = [1337,1337,1337,1337,1337];
const v32 = {valueOf:v31,__proto__:v31};
let v34 = 13.37;
const v37 = [1337,1337,1337,1337,1337];
function v38(v39,v40,v41,v42) {
    'use strict'
    try {
        const v46 = [1337,1337];
        const v48 = new ArrayBuffer();
        v34 = v41;
        let v51 = 0;
        do {
            const v52 = v51 + 1;
            v51 = v52;
        } while (v51 < 4);
        let v54 = 0;
        const v55 = v48.slice(v34);
        const v56 = v54 + 1;
        const v57 = [13.37];
        const v59 = [1337,13.37,v57,-1155643050];
        let v60 = v57;
        const v62 = [1337,1337];
        const v63 = {valueOf:1337,b:v29,e:1337,d:1337,constructor:v60,__proto__:1337,a:v57};
        const v65 = [1337,1337,1337,1337,1337];
        const v66 = [v65];
        const v67 = v62[-4096];
        const v68 = v59[-3357639552];
        const v69 = 13.37 == v59;
        let v71 = 0;
        const v72 = v60.flat();
        v42[3] = v42;
        const v73 = v32();
        const v74 = v73[-2900725722];
        function v75(v76,v77,v78,v79,v80) {
            'use strict'
            return v40;
        }
        let v82 = 0;
        const v84 = Float32Array();
        const v85 = v84.slice();
    } catch(v86) {
        const v87 = {construct:v86};
    }
}
const v88 = {deleteProperty:v38,set:v38,getPrototypeOf:v38,call:v38,preventExtensions:v38,isExtensible:v38,construct:v38,get:v38,ownKeys:v38,setPrototypeOf:v38,has:v38};
const v90 = new Proxy(v37,v88);
v90[1] = "MIN_VALUE";
let v93 = 0;
while (v93 < 9) {
    function v94(v95,v96,v97) {
        'use strict'
    }
}
}
%NeverOptimizeFunction(main);
main();
