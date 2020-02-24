function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = (1337).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
v3.__proto__ = v8;
const v9 = (1337).pop();
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();
