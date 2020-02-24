function main() {
const v2 = [1337];
const v3 = {length:Number};
for (const v7 in v2) {
}
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        v13[3] = v13;
        try {
            v8.__proto__ = v13;
        } catch(v14) {
            delete v3[Uint32Array];
        }
    } catch(v15) {
        const v16 = v13 instanceof Uint32Array;
        const v18 = v16 % 3890419937;
    }
    return v8;
}
const v19 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v21 = new Proxy(v8,v19);
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
