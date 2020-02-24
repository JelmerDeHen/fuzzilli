function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    function v8(v9,v10) {
        for (let v14 = 0; v14 < 100; v14++) {
        }
        for (const v15 of v4) {
            const v16 = v8(v10);
        }
    }
    const v17 = v8();
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
const v20 = new Proxy(v2,v18);
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
