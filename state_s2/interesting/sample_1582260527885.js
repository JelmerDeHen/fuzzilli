function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = v1.toStringTag;
// v4 = .unknown
const v5 = {apply:v4,set:v4,getOwnPropertyDescriptor:v4,defineProperty:v4};
// v5 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "apply", "set", "__proto__", "defineProperty"])
const v7 = new Proxy(v3,v5);
// v7 = .unknown
const v8 = v7.pop();
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
