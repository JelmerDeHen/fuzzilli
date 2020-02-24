function main() {
const v3 = [Int32Array,1337,1337,-720484316];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v4 = v3;
const v7 = {length:13.37,a:gc,constructor:gc};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a", "constructor"])
function v8(v9,v10) {
    return gc;
}
const v11 = v8();
// v11 = .unknown
const v12 = v11();
// v12 = .unknown
const v13 = {defineProperty:v12,get:v12,getOwnPropertyDescriptor:gc,apply:v11,set:v8,preventExtensions:v12,setPrototypeOf:gc,construct:gc};
// v13 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "apply", "preventExtensions", "defineProperty"], withMethods: ["construct", "set", "getOwnPropertyDescriptor", "setPrototypeOf"])
v7.__proto__ = v11;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v19 = new Proxy(v7,v13);
// v19 = .unknown
for (const v20 in v19) {
}
}
%NeverOptimizeFunction(main);
main();
