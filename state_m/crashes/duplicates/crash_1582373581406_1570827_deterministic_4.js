function main() {
const v1 = [13.37];
const v2 = [];
let v3 = v1;
const v5 = [1337,1337,1337,1337,1337];
const v6 = {valueOf:v5,__proto__:v5};
let v8 = 13.37;
const v11 = [1337,1337,1337,1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v20 = [1337,1337];
        const v22 = new ArrayBuffer();
        v8 = v15;
        let v25 = 0;
        do {
            const v26 = typeof v15;
            const v28 = v26 === "boolean";
            let v29 = v3;
            let v32 = 0;
            do {
                const v33 = v20.__proto__;
                const v34 = v32 + 1;
                v32 = v34;
            } while (v32 < 9);
            const v35 = {};
            const v36 = [v35,v35];
            const v37 = v25 + 1;
            v25 = v37;
        } while (v25 < 4);
        let v40 = 0;
        const v41 = v22.slice(v8,4);
        const v42 = [13.37];
        const v44 = [1337,13.37,v42,-1155643050];
        let v45 = v42;
        const v46 = v44[-3357639552];
        const v47 = 13.37 == v44;
        let v49 = 0;
        const v50 = v45.flat();
        v16[3] = v16;
        const v51 = v6();
    } catch(v52) {
        const v53 = {construct:v52};
    }
}
const v54 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v56 = new Proxy(v11,v54);
v56[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
