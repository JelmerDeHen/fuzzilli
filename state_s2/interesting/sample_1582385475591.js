function main() {
const v3 = [13.37,1337,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
