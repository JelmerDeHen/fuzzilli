function main() {
const v4 = [1337,1337];
const v5 = [-4294967295,13.37,2];
let v6 = v4;
const v9 = [];
const v10 = {length:1337,e:1337,c:v9,a:1337,e:"symbol"};
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v18 = v15.__proto__;
    } catch(v19) {
    }
    try {
        const v20 = v15 & 1337;
    } catch(v21) {
    }
    const v22 = v5.concat(1337,v6,v5,"name",v16);
}
const v23 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v25 = new Proxy(v10,v23);
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
