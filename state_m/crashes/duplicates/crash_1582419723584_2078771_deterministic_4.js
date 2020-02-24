function main() {
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = [1337,1337];
        const v12 = new ArrayBuffer();
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            v15 = v16;
        } while (v15 < 4);
        const v17 = typeof -2;
        const v19 = v17 === "object";
        v8.__proto__ = "object";
        const v21 = [1337,1337];
        const v23 = [1337,1337,1337,1337,1337];
        const v24 = [v23];
    } catch(v25) {
        const v26 = {construct:v25};
    }
}
const v27 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v29 = new Proxy(v3,v27);
v29[6] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
