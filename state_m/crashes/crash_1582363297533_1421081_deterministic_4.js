function main() {
const v2 = [1337];
const v3 = {};
const v7 = [1337,13.37,1337,Uint8Array];
let v8 = v7;
const v10 = [1337,1337,1337,1337,1337];
const v11 = {valueOf:v10,__proto__:v10};
let v13 = 13.37;
const v16 = [1337,1337,1337,1337,1337];
function v17(v18,v19,v20,v21) {
    'use strict'
    v10.length = 0;
    try {
        const v26 = [1337,1337];
        const v28 = new ArrayBuffer();
        v13 = v20;
        let v31 = 0;
        do {
            const v32 = v31 + 1;
            v31 = v32;
        } while (v31 < 4);
        let v35 = 0;
        const v36 = v28.slice(v13,4);
        const v37 = v35 + 1;
        const v38 = [13.37];
        const v40 = [1337,13.37,v38,-1155643050];
        const v42 = {set:v21};
        const v44 = Object.defineProperty(v40,"c");
        let v45 = v38;
        const v47 = [1337,1337];
        const v48 = {valueOf:1337,b:v8,e:1337,d:1337,constructor:v45,__proto__:1337,a:v38};
        const v50 = [1337,1337,1337,1337,1337];
        const v51 = [v50];
        const v52 = v47[-4096];
        const v53 = v40[-3357639552];
        const v54 = 13.37 == v40;
        const v55 = v45.flat();
        v21[3] = v21;
        const v56 = v11();
        const v57 = v56[-2900725722];
        let v59 = undefined;
        function v60(v61,v62,v63,v64,v65) {
            'use strict'
            v59 = v26;
        }
        const v67 = v10.constructor;
        const v68 = v52(v35,v2,v3);
        const v69 = 0 instanceof v28;
        let v70 = 1337;
        if (v21) {
            const v71 = v19.__proto__;
        } else {
            const v72 = v38 in 1337;
        }
        const v73 = v45 << 13.37;
        let v74 = 0;
    } catch(v75) {
        const v76 = {construct:v75};
    }
}
const v77 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
const v79 = new Proxy(v16,v77);
v79[1] = "MIN_VALUE";
const v80 = v79.__proto__;
}
%NeverOptimizeFunction(main);
main();
