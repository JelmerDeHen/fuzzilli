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
        const v19 = new Int16Array();
        const v20 = v19.slice();
        const v24 = [1337,1337];
        const v26 = new ArrayBuffer();
        v9 = v16;
        let v29 = 0;
        do {
            const v30 = v29 + 1;
            v29 = v30;
        } while (v29 < 4);
        let v32 = 0;
        const v33 = v26.slice(v9);
        const v34 = v32 + 1;
        const v35 = [13.37];
        const v37 = [1337,13.37,v35,-1155643050];
        let v38 = v35;
        const v40 = [1337,1337];
        const v41 = {valueOf:1337,b:v4,e:1337,d:1337,constructor:v38,__proto__:1337,a:v35};
        const v43 = [1337,1337,1337,1337,1337];
        const v44 = [v43];
        const v45 = v40[-4096];
        const v46 = v37[-3357639552];
        const v47 = 13.37 == v37;
        let v49 = 0;
        const v50 = v38.flat();
        v17[3] = v17;
        const v51 = v50[-2147483647];
        const v52 = v51();
        const v53 = v7();
        const v54 = v53[-2900725722];
        let v56 = undefined;
        const v57 = v16 == v16;
        const v58 = v15.__proto__;
        const v59 = {set:v45,defineProperty:v9,setPrototypeOf:v9,getPrototypeOf:v14,call:v53,preventExtensions:v13,deleteProperty:v46,construct:v54,isExtensible:v13,has:v52,ownKeys:v13,apply:v16};
        const v61 = Proxy();
        function v62(v63,v64,v65,v66,v67) {
            'use strict'
            v56 = v24;
        }
    } catch(v68) {
        const v69 = {construct:v68};
    }
}
const v70 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v72 = new Proxy(v12,v70);
v72[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
