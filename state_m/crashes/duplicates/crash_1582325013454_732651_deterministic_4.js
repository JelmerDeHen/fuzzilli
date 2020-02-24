function main() {
const v2 = [1337,1337,1337,1337,1337];
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v9 = undefined;
        const v10 = typeof undefined;
        let v12 = 0;
        for (let v16 = 0; v16 < 100; v16++) {
            const v17 = v3();
        }
        const v18 = {};
        const v19 = [v18,v18];
        for (const v21 in "object") {
        }
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v25 = new Proxy(v2,v23);
v25[1] = "string";
}
%NeverOptimizeFunction(main);
main();
