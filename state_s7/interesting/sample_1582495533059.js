function main() {
const v4 = String.fromCharCode(13.37,1360750684);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v6;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v11(v12,v13,v14,v15) {
    'use strict'
    let v17 = 13.37;
    const v18 = {b:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v23 = [NaN,13.37,2];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "call", "set", "get", "has", "ownKeys", "setPrototypeOf", "preventExtensions", "construct", "getPrototypeOf"])
const v33 = new Proxy(v10,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
