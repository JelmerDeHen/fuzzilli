function main() {
const v4 = String.fromCharCode(13.37,1360750684);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = v6;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v11(v12,v13,v14,v15) {
    'use strict'
    let v17 = 13.37;
    const v18 = {b:v17};
    // v18 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v23 = [NaN,13.37,2];
    // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v24 = v7;
    v23.length = 1337;
    const v26 = {constructor:NaN};
    // v26 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
    const v28 = Object.seal(v23,2939890574,v26);
    // v28 = .object()
    const v30 = v23.indexOf(v17,v24,v23,"name",v18);
    // v30 = .integer
}
const v31 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "getPrototypeOf", "get", "set", "isExtensible", "deleteProperty", "setPrototypeOf", "preventExtensions", "has", "call"])
const v33 = new Proxy(v10,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
