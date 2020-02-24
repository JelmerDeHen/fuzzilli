function main() {
const v0 = [];
const v4 = [1337,13.37,1337,Uint8Array];
let v5 = v4;
const v7 = [1337,1337,1337,1337,1337];
const v8 = {valueOf:v7,__proto__:v7};
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v22 = [1337,1337];
        const v24 = new ArrayBuffer();
        const v26 = Symbol.split;
        let v28 = 0;
        const v29 = v28 + 1;
        v10 = v17;
        let v32 = 0;
        do {
            const v33 = v32 + 1;
            v32 = v33;
            const v34 = v26 || v4;
            v0[4088790581] = v17;
        } while (v32 < 4);
        let v37 = 0;
        const v38 = v24.slice(v10,4);
        const v39 = v37 + 1;
        const v40 = [13.37];
        const v42 = [1337,13.37,v40,-1155643050];
        let v43 = v40;
        const v45 = [1337,1337];
        const v46 = {valueOf:1337,b:v5,e:1337,d:1337,constructor:v43,__proto__:1337,a:v40};
        const v47 = [v4];
        const v48 = v24[64];
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v50];
        const v52 = v45[-4096];
        const v53 = v42[-3357639552];
        const v54 = 13.37 == v42;
        let v56 = 0;
        const v57 = v43.flat();
        v18[3] = v18;
        const v58 = v8();
        const v59 = v58[-2900725722];
        let v61 = undefined;
        function v62(v63,v64,v65,v66,v67) {
            'use strict'
            v61 = v22;
        }
        let v69 = 0;
    } catch(v70) {
        const v71 = {construct:v70};
    }
}
const v72 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v74 = new Proxy(v13,v72);
v74[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
