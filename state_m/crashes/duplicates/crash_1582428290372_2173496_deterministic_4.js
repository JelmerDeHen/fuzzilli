function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        for (let v11 = 0; v11 < 100; v11++) {
            const v12 = v3();
        }
        for (const v14 in "boolean") {
            const v15 = {};
            const v17 = [13.37,13.37,v15,13.37];
            let v19 = undefined;
        }
    } catch(v20) {
    }
}
const v21 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v23 = new Proxy(v2,v21);
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
