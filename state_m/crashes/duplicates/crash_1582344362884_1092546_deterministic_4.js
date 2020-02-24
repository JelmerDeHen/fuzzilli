function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = [1337,1337];
        const v12 = typeof -128;
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            v15 = v16;
        } while (v15 < 4);
        v8.c = ArrayBuffer;
    } catch(v17) {
        const v18 = {construct:v17};
    }
}
const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v21 = new Proxy(v3,v19);
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
