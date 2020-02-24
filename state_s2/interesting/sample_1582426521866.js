function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = (1337).__proto__;
// v4 = .unknown
let v5 = v2;
let v6 = v5;
const v9 = new Proxy(v6,Object);
// v9 = .unknown
v4.__proto__ = v9;
const v10 = (13.37).push();
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
