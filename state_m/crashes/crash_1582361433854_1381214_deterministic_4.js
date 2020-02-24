function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = {length:isFinite};
        const v12 = [1337,v10,1337,1337,1337];
        function v13(v14,v15) {
            const v16 = v4();
        }
        const v17 = v12.forEach(v13);
        this[v6] = v1;
    } catch(v19) {
    }
}
const v20 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v22 = new Proxy(v3,v20);
v22.constructor = v1;
}
%NeverOptimizeFunction(main);
main();
