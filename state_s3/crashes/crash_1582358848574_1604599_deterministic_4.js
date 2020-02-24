function main() {
const v1 = [1337];
const v5 = [0,-1882595336,-1882595336,-1882595336,-1882595336];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        for (const v11 in v5) {
        }
        let v13 = 0;
        const v14 = v1.forEach(v6);
        const v15 = v13 + 1;
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v19 = new Proxy(v5,v17);
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
