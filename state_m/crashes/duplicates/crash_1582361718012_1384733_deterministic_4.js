function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        while (v10 < 8) {
            const v11 = v10 + 1;
            v10 = v11;
        }
        const v12 = v3();
        for (const v14 in "boolean") {
            for (const v16 in "object") {
            }
        }
    } catch(v17) {
    }
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v20 = new Proxy(v2,v18);
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
