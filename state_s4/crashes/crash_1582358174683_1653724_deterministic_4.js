function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v7.constructor = v1;
        let v9 = v5;
        const v10 = v8.cosh();
        const v11 = v5.some();
    } catch(v12) {
        let v15 = 0;
        while (v15 < 4) {
            let v17 = 0;
            const v18 = v8 - 1;
            const v19 = v17 + 1;
            const v20 = v15 + 1;
            v15 = v20;
        }
        const v21 = v4();
        const v23 = Symbol.isConcatSpreadable;
        const v24 = v3[v23];
    }
}
const v25 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v27 = new Proxy(v3,v25);
v27.constructor = v1;
}
%NeverOptimizeFunction(main);
main();
