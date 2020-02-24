function main() {
const v2 = {length:-260920.83395578247,a:gc,length:gc};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a", "length"])
function v3(v4,v5) {
    return gc;
}
const v6 = v3();
// v6 = .unknown
const v7 = v6();
// v7 = .unknown
const v8 = {defineProperty:v7,get:v7,a:gc,apply:v6,set:v3,preventExtensions:v7,setPrototypeOf:gc,construct:gc};
// v8 = .object(ofGroup: Object, withProperties: ["preventExtensions", "apply", "defineProperty", "get", "__proto__"], withMethods: ["a", "setPrototypeOf", "construct", "set"])
const v10 = new Proxy(v2,v8);
// v10 = .unknown
const v12 = Object.keys(v10);
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
}
%NeverOptimizeFunction(main);
main();
