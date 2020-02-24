function main() {
const v2 = new Proxy(Object,Object);
// v2 = .unknown
const v3 = Object.freeze(v2);
// v3 = .undefined
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = v7;
const v11 = Reflect.set(v8,"name",NaN,Object);
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
