function main() {
const v2 = -2008211595 - 1;
const v3 = Number.__proto__;
const v5 = [1337,1337,1337];
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        for (let v18 = 0; v18 < 100; v18++) {
            const v19 = v9();
        }
        "name"[1337] = v5;
        let v20 = 100;
        const v21 = (1337)[v12];
        const v22 = {};
        let v23 = v22;
        const v25 = JSON.stringify();
        const v26 = v12();
    } catch(v27) {
    }
}
const v28 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v30 = new Proxy(v8,v28);
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
