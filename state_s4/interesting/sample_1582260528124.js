function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = v1.toStringTag;
// v4 = .unknown
const v5 = {apply:v4,set:v4,getOwnPropertyDescriptor:v4,defineProperty:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "apply", "getOwnPropertyDescriptor", "defineProperty"])
const v7 = new Proxy(v3,v5);
// v7 = .unknown
const v8 = v7.pop();
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
