function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {__proto__:"hasInstance",d:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v4 = {__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {constructor:"symbol",length:v3};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v9 = Reflect.defineProperty(v6,v4,Reflect);
// v9 = .boolean
}
%NeverOptimizeFunction(main);
main();
