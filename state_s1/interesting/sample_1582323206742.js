function main() {
let v3 = RegExp;
let v4 = v3;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v9(v10,v11,v12,v13) {
    'use strict'
}
const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:1337,has:v9};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["has", "set", "getPrototypeOf", "ownKeys", "deleteProperty", "get", "construct", "preventExtensions", "isExtensible", "call"])
const v16 = new Proxy(v8,v14);
// v16 = .unknown
const v17 = new Proxy(v4,Object);
// v17 = .unknown
const v18 = Function("name");
// v18 = .unknown
v18.prototype = v16;
}
%NeverOptimizeFunction(main);
main();
