function main() {
const v2 = {length:13.37,a:gc,length:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["length", "a"])
function v3(v4,v5) {
    return gc;
}
const v6 = v3();
// v6 = .unknown
const v7 = v6();
// v7 = .unknown
const v8 = {defineProperty:v7,get:v7,getOwnPropertyDescriptor:gc,apply:v6,set:v3,preventExtensions:v7,setPrototypeOf:gc,construct:gc};
// v8 = .object(ofGroup: Object, withProperties: ["defineProperty", "apply", "__proto__", "preventExtensions", "get"], withMethods: ["getOwnPropertyDescriptor", "construct", "set", "setPrototypeOf"])
const v10 = new Proxy(v2,v8);
// v10 = .unknown
const v12 = Object.keys(v10);
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v18 = 0;
}
%NeverOptimizeFunction(main);
main();
