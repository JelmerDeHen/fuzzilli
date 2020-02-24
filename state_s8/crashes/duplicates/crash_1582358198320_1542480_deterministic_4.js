function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v9 = 0;
        const v10 = v9 + 1;
        for (let v15 = 0; v15 < 100; v15++) {
            const v16 = v3();
        }
        for (const v17 in "boolean") {
            for (let v21 = 0; v21 < 9; v21++) {
            }
        }
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v25 = new Proxy(v2,v23);
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
