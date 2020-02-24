function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4,v5,v6) {
    'use strict'
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    this.valueOf = 1337;
    return v4;
}
const v14 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "isExtensible", "preventExtensions", "has", "set", "setPrototypeOf", "getPrototypeOf", "deleteProperty", "construct", "ownKeys", "call"])
const v16 = new Proxy(v1,v14);
// v16 = .unknown
const v18 = JSON.stringify(v14,v2,v16);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
