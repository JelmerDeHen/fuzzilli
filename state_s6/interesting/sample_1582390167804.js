function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = (1337).__proto__;
// v4 = .unknown
let v5 = v2;
let v6 = v5;
const v9 = new Proxy(v6,Object);
// v9 = .unknown
v4.__proto__ = v9;
const v10 = (1337).fill();
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();