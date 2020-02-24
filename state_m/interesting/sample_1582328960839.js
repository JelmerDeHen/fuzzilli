function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
