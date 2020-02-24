function main() {
const v2 = {length:-260920.83395578247,a:gc,length:gc};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["length", "a"])
function v3(v4,v5) {
    return gc;
}
const v6 = v3();
// v6 = .unknown
const v7 = v6();
// v7 = .unknown
const v8 = {defineProperty:v7,get:v7,a:gc,apply:v6,set:v3,preventExtensions:v7,setPrototypeOf:gc,construct:gc};
// v8 = .object(ofGroup: Object, withProperties: ["get", "preventExtensions", "defineProperty", "apply", "__proto__"], withMethods: ["set", "a", "construct", "setPrototypeOf"])
const v10 = new Proxy(v2,v8);
// v10 = .unknown
const v12 = Object.keys(v10);
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();
