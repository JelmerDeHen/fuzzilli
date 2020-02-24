function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
