function main() {
const v2 = {length:13.37,a:gc,constructor:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a", "constructor"])
function v3(v4,v5) {
    return gc;
}
const v6 = v3();
// v6 = .unknown
const v7 = v6();
// v7 = .unknown
const v8 = {defineProperty:v7,get:v7,getOwnPropertyDescriptor:gc,apply:v6,set:v3,preventExtensions:v7,setPrototypeOf:gc,construct:gc};
// v8 = .object(ofGroup: Object, withProperties: ["apply", "get", "defineProperty", "preventExtensions", "__proto__"], withMethods: ["getOwnPropertyDescriptor", "setPrototypeOf", "set", "construct"])
const v10 = new Proxy(v2,v8);
// v10 = .unknown
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v16 = Object.values(v10);
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();
