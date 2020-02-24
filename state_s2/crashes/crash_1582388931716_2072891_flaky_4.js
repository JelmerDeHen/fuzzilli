function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v6 = [v3,Int8Array,v3];
const v7 = {e:13.37,d:16,b:v5,constructor:v3};
const v8 = {valueOf:v5,a:v7};
let v9 = v8;
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    const v19 = [-2331916614,-2331916614,-2331916614];
    const v23 = [1337,1337,1337,1337,1337];
    function v24(v25,v26,v27,v28) {
        'use strict'
        try {
            for (let v32 = 0; v32 < 100; v32++) {
            }
            const v33 = v24(undefined);
        } catch(v34) {
            const v35 = v25[3];
        }
    }
    const v36 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
    const v38 = new Proxy(v23,v36);
    v38[1] = "MIN_VALUE";
}
const v39 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v41 = new Proxy(v12,v39);
v41[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
