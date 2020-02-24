function main() {
const v2 = [1337,1337,1337,1337,1337];
const v4 = [13.37];
const v6 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        v10.constructor = v4;
        const v12 = v11.cosh();
        const v13 = v8.some();
    } catch(v14) {
        const v15 = typeof v14;
        const v17 = v15 === "string";
    }
    const v19 = v11 === 13.37;
    const v20 = 0 * v11;
}
const v21 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
const v23 = new Proxy(v6,v21);
v23.constructor = v4;
}
%NeverOptimizeFunction(main);
main();
