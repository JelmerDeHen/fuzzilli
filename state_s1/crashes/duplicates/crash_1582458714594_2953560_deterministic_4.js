function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
let v2 = v1;
const v5 = [13.37];
const v7 = [1337,1337,1337,"xcycrfnQjT",1337];
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        for (let v16 = 0; v16 < 100; v16++) {
            const v17 = v8();
        }
        for (const v18 of v2) {
        }
    } catch(v19) {
    }
}
const v20 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
const v22 = new Proxy(v7,v20);
v22.constructor = v5;
}
%NeverOptimizeFunction(main);
main();
