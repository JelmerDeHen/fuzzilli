function main() {
const v2 = [13.37];
let v3 = v2;
const v5 = [1337,1337,1337,1337,1337];
let v6 = v5;
const v9 = [-1890352163,-1890352163,-1890352163,-1890352163,-1890352163];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        v5.__proto__ = v14;
    } catch(v15) {
        const v16 = v14 >> 256;
    }
}
const v17 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v19 = new Proxy(v9,v17);
v19[1] = "MIN_VALUE";
const v20 = v3 instanceof v6;
}
%NeverOptimizeFunction(main);
main();
