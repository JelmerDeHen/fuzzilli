function main() {
const v3 = [13.37,1337,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = (1337).__proto__;
// v5 = .unknown
let v6 = v3;
let v7 = v6;
const v10 = new Proxy(v7,Object);
// v10 = .unknown
v5.__proto__ = v10;
const v11 = (13.37).includes();
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
