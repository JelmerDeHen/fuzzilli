function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = v1.__proto__;
// v3 = .object()
let v5 = this;
let v6 = v5;
const v9 = new Proxy(v6,Object);
// v9 = .unknown
v3.__proto__ = v9;
let v15 = 0;
const v17 = Symbol.isConcatSpreadable;
// v17 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v3[v17] = 1337;
const v18 = v15 + 1;
// v18 = .primitive
v15 = v18;
}
%NeverOptimizeFunction(main);
main();
