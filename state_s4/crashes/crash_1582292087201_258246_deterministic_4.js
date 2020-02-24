function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337];
const v5 = [2147483647,2147483647];
const v6 = [13.37,v1];
const v10 = [1337,1337,1337,1337,1337];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v16 = {};
        for (let v20 = 0; v20 < 100; v20++) {
            const v21 = v11();
        }
        for (const v22 in "symbol") {
            const v23 = [100,13.37];
        }
        let v24 = v16;
        const v25 = v15 + 1;
    } catch(v26) {
    }
}
const v27 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v29 = new Proxy(v10,v27);
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
