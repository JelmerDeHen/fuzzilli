function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            v12 = v13;
        } while (v12 < 3);
        const v14 = v4(1337,Float32Array);
    } catch(v15) {
        for (let v19 = 0; v19 < 100; v19++) {
        }
    }
}
const v20 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:1337,has:v4};
const v22 = new Proxy(v3,v20);
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
