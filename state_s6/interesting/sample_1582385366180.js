function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = (1337).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Proxy(v5,Object);
// v8 = .unknown
v3.__proto__ = v8;
const v9 = (1337).includes();
// v9 = .unknown
}
%NeverOptimizeFunction(main);
main();
