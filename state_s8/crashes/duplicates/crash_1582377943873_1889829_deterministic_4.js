function main() {
const v1 = [1337,1337,1337,1337,1337];
const v2 = {valueOf:v1,__proto__:v1};
let v4 = 13.37;
const v7 = [1337,1337,1337,1337,1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v16 = 2.2250738585072014e-308 / 3890419937;
        const v17 = [v16];
        let v18 = v17;
        const v20 = new Uint8Array();
        const v23 = [1337,1337];
        const v25 = new ArrayBuffer();
        v4 = v11;
        let v28 = 0;
        do {
            const v29 = v28 + 1;
            v28 = v29;
        } while (v28 < 4);
        let v31 = 0;
        const v32 = v25.slice(v4);
        const v33 = v31 + 1;
        const v34 = [13.37];
        const v36 = [1337,13.37,v34,-1155643050];
        let v37 = v34;
        const v39 = [1337,1337];
        const v41 = [1337,1337,1337,1337,1337];
        const v42 = [v41];
        const v43 = v39[-4096];
        const v44 = v36[-3357639552];
        const v45 = 13.37 == v36;
        let v47 = 0;
        const v48 = v37.flat();
        v12[3] = v12;
        const v49 = {toString:v9};
        const v50 = ~0;
        const v51 = 0 === "MIN_VALUE";
        const v52 = v2();
        const v53 = v52[-2900725722];
        const v55 = v49.__proto__;
        for (let v59 = 0; v59 < 4; v59++) {
            const v60 = v59 < v11;
            let v61 = v9;
            const v62 = (1337)[v55];
        }
        const v63 = {set:v4};
        const v65 = Object.defineProperty();
        let v66 = undefined;
    } catch(v67) {
        const v68 = {construct:v67};
    }
}
const v69 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,b:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v71 = new Proxy(v7,v69);
v71[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
