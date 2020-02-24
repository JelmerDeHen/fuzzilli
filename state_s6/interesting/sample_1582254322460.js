function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = "object".byteLength;
// v3 = .unknown
const v4 = v1.__proto__;
// v4 = .object()
const v6 = {a:v3};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v8 = Object.defineProperty(v4,-2,v6);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
