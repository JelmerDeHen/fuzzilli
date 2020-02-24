function main() {
const v1 = [13.37,13.37];
const v3 = [1337,1337,1337,1337];
const v6 = [1337,1337,"MIN_VALUE",1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        for (let v15 = 0; v15 < 2; v15++) {
        }
        const v16 = v7();
    } catch(v17) {
        const v18 = [];
        const v19 = {a:v18};
    }
}
const v20 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:1337,has:v7};
const v22 = new Proxy(v6,v20);
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
