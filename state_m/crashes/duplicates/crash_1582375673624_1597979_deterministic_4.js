function main() {
let v1 = 13.37;
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v1 = v8;
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            v12 = v13;
        } while (v12 < 4);
        for (const v14 of v1) {
        }
        v9[3] = v9;
    } catch(v15) {
        const v16 = {construct:v15};
    }
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v19 = new Proxy(v4,v17);
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
