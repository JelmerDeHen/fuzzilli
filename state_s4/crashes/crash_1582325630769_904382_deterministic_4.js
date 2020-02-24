function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        for (let v11 = 0; v11 < 100; v11++) {
            const v12 = v3();
        }
        for (const v14 in "boolean") {
            const v16 = [1337];
            for (let v20 = 0; v20 < 10; v20++) {
            }
            function v21(v22,v23) {
            }
            const v24 = v21();
            if (v24) {
                for (let v28 = 0; v28 < 9; v28++) {
                }
            } else {
            }
        }
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v32 = new Proxy(v2,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
