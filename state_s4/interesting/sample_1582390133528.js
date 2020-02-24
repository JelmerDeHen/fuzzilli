function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
