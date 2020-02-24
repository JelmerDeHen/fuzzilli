function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    let v10 = 0;
    while (v10 < 1337) {
        const v11 = v10 + 1;
        v10 = v11;
    }
    let v13 = 0;
    try {
        for (let v17 = 0; v17 < 100; v17++) {
            const v18 = v3();
        }
    } catch(v19) {
    }
    const v20 = v13 + 1;
}
const v21 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v23 = new Proxy(v2,v21);
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
