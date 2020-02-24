function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [4294967296];
const v7 = {e:v3,b:4294967296,valueOf:"search",__proto__:v6};
const v10 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        for (let v20 = 0; v20 < 100; v20++) {
            const v21 = v11();
        }
        let v23 = 0;
        for (const v24 in "a") {
            let v26 = 0;
            const v27 = v26 + 1;
        }
        const v28 = v23 + 1;
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
const v32 = new Proxy(v10,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
