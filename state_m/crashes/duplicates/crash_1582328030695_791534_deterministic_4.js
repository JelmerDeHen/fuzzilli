function main() {
const v1 = [1337,1337];
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        for (let v13 = 0; v13 < 100; v13++) {
            const v14 = v5();
        }
        for (const v15 of v1) {
        }
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v19 = new Proxy(v4,v17);
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
