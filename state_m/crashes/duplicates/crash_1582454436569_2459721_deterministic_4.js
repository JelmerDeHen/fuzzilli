function main() {
let v2 = -2;
const v3 = v2 + 1;
const v6 = [13.37];
const v8 = [1337,1337,1337,1337,1337];
const v9 = [v6];
const v10 = "MAX_SAFE_INTEGER".__proto__;
const v11 = [13.37,-65536];
const v13 = [1337,1337,1337,1337,1337];
const v15 = [13.37];
const v17 = [1337,1337,1337,1337,1337];
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        v21.d = v15;
        let v23 = v13;
        let v27 = 13.37;
        for (const v28 in v10) {
            const v29 = v21("unscopable");
        }
        let v32 = 0;
        do {
            const v33 = v11 != 13.37;
            const v34 = v32 + 1;
            v32 = v34;
        } while (v32 < 5);
        const v36 = [13.37,"unscopable"];
        const v37 = {a:v36};
        const v41 = [eval,13.37,-4294967296];
        let v42 = "toStringTag";
        const v43 = v41.indexOf(v27,v42);
        const v44 = v22.cosh();
        const v45 = v19.some();
    } catch(v46) {
        const v48 = Uint16Array();
    }
}
const v49 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
const v51 = new Proxy(v17,v49);
v51.constructor = v15;
}
%NeverOptimizeFunction(main);
main();
