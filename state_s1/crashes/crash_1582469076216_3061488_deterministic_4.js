function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = [13.37];
        const v11 = [v9,13.37];
        let v14 = 0;
        do {
            const v15 = v11.findIndex(v3);
            const v16 = v14 + 1;
            v14 = v16;
        } while (v14 < 9);
        const v18 = [0];
        for (const v19 of v18) {
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
