function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = [1337,1337];
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            v12 = v13;
        } while (v12 < 7);
        const v14 = v9.reduce(v3);
        const v15 = v3();
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v19 = new Proxy(v2,v17);
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
