function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v3 = {valueOf:WeakSet,__proto__:v2};
const v6 = [13.37];
const v8 = [1337,1337,1337,"xcycrfnQjT",1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v16 = [13.37,"DPtrqeeOKz"];
        function v17(v18,v19) {
        }
        const v21 = [1337];
        for (let v25 = 0; v25 < 100; v25++) {
            const v26 = v9();
        }
        const v27 = {};
        const v28 = v11.asinh();
        const v29 = v17();
        for (let v33 = 0; v33 < 100; v33++) {
        }
        const v34 = v29(1337,v3,v6);
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v38 = new Proxy(v8,v36);
v38.constructor = v6;
}
%NeverOptimizeFunction(main);
main();
