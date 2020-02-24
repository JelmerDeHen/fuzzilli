function main() {
const v2 = {length:13.37,a:gc,length:gc};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a", "length"])
function v3(v4,v5) {
    return gc;
}
const v6 = v3();
// v6 = .unknown
const v7 = v6();
// v7 = .unknown
const v8 = {defineProperty:v7,get:v7,getOwnPropertyDescriptor:gc,apply:v6,set:v3,preventExtensions:v7,setPrototypeOf:gc,construct:gc};
// v8 = .object(ofGroup: Object, withProperties: ["preventExtensions", "defineProperty", "get", "__proto__", "apply"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "construct", "set"])
const v10 = new Proxy(v2,v8);
// v10 = .unknown
const v12 = Object.keys(v10);
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = 0;
}
%NeverOptimizeFunction(main);
main();
