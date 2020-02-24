function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [-4294967295,13.37,v2];
let v6 = v4;
const v9 = [];
const v10 = {length:1337,e:1337,c:v9,a:1337,toString:"symbol"};
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v18 = v12();
        const v19 = v5.concat(v6,v6,v5,"name",v16);
    } catch(v20) {
        const v22 = Symbol.unscopables;
        const v23 = v4[v22];
    }
    return v13;
}
const v24 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v4,has:v12};
const v26 = new Proxy(v10,v24);
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
