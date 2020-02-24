function main() {
const v4 = String.fromCharCode(13.37,1360750684);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v11(v12,v13,v14,v15) {
    'use strict'
    let v17 = 13.37;
    const v18 = {b:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v23 = [NaN,13.37,2];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v24 = v7;
    v23.length = 1337;
    const v26 = {constructor:NaN};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
    const v28 = Object.seal(v23,2939890574,v26);
    // v28 = .object()
    const v30 = v23.indexOf(v17,v24,v23,"name",v18);
    // v30 = .integer
}
const v31 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "call", "has", "deleteProperty", "set", "isExtensible", "construct", "ownKeys", "setPrototypeOf", "getPrototypeOf", "preventExtensions"])
const v33 = new Proxy(v10,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
