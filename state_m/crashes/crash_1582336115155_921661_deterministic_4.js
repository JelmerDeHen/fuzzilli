function main() {
const v4 = [1337,1337,1337,1337,1337];
const v5 = [257,"zN9TokC9cI",v4];
const v8 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v15 = new Int16Array();
        const v16 = v15.subarray();
        for (const v17 of v5) {
            let v18 = v4;
            try {
                let v19 = v10;
                v18 = 13.37;
            } catch(v20) {
                const v21 = v13.__proto__;
                v18 = v21;
            }
        }
        const v22 = typeof v13;
        for (let v26 = 0; v26 < 2; v26++) {
            const v27 = v26[v26];
        }
        const v29 = [1337];
        let v30 = v29;
        const v31 = v16.copyWithin(v30,v12,v13);
    } catch(v32) {
    }
    for (let v36 = 0; v36 < 3; v36++) {
    }
}
const v37 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v39 = new Proxy(v8,v37);
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
