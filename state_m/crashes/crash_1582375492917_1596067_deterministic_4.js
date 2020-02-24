function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
const v4 = [];
function v5(v6,v7,v8) {
}
let v10 = 0;
let v11 = v5;
const v12 = v10 + 1;
const v14 = [13.37,13.37];
const v16 = [1337,1337,1337,1337,1337];
const v17 = [13.37,1337];
const v18 = {a:v17,length:v16,__proto__:v14,c:v17,toString:v16};
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        let v28 = 0;
        while (v28 < 9) {
            const v29 = v20(v22,9,9);
            const v30 = v28 + 1;
            v28 = v30;
        }
        const v31 = 13.37 <= v28;
        const v32 = [13.37];
        let v33 = v32;
        const v35 = [1337,1337];
        const v36 = v35[2609233507];
        const v37 = v33.flat();
    } catch(v38) {
    }
}
const v39 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v41 = new Proxy(v18,v39);
v41[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
