function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        while (v10 < 6) {
            const v11 = v10 + 1;
            for (let v15 = 0; v15 < 6; v15++) {
            }
            v10 = v11;
        }
        v7.__proto__ = v4;
    } catch(v16) {
        for (const v18 in "function") {
        }
    }
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v21 = new Proxy(v2,v19);
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
