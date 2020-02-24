function main() {
const v1 = [1337,1337,1337,1337,1337];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v12 = [1337,1337];
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            v15 = v16;
        } while (v15 < 4);
        const v17 = v5();
        let v19 = 0;
        const v20 = [13.37];
        for (const v21 in v1) {
        }
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v25 = new Proxy(v4,v23);
v25[1337] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
