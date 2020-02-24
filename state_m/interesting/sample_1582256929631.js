function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {__proto__:"hasInstance",d:v2};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v4 = {__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {constructor:"symbol",length:v3};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v9 = Reflect.defineProperty(v6,v4,Reflect);
// v9 = .boolean
}
%NeverOptimizeFunction(main);
main();
