function main() {
let v3 = RegExp;
let v4 = v3;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v9(v10,v11,v12,v13) {
    'use strict'
}
const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:1337,has:v9};
// v14 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["call", "construct", "getPrototypeOf", "get", "ownKeys", "set", "isExtensible", "deleteProperty", "preventExtensions", "has"])
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
