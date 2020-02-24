function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = (4294967296).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
v3.__proto__ = v8;
const v9 = (4294967296).pop();
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();
