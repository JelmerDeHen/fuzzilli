function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
