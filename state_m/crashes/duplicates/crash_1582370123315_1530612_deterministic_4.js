function main() {
const v1 = [4294967295];
const v3 = [1337,1337,1337,1337,1337];
const v4 = [v1];
const v6 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        v10.constructor = v4;
        let v12 = v3;
        let v15 = 0;
        while (v15 < 4) {
            const v16 = v15 + 1;
            v15 = v16;
        }
        const v17 = v11.setInt32(v12,v12,v12);
        const v19 = [1337];
        const v20 = v19.length;
    } catch(v21) {
    }
    const v23 = Uint8ClampedArray();
}
const v24 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
const v26 = new Proxy(v6,v24);
v26.constructor = v4;
}
%NeverOptimizeFunction(main);
main();
