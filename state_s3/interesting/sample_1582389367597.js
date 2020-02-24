function main() {
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = 1337 < v5;
// v7 = .boolean
if (v7) {
    const v8 = 1000 instanceof 1337;
    // v8 = .boolean
} else {
}
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = (65536).__proto__;
// v12 = .unknown
let v13 = v10;
let v14 = v13;
const v17 = new Proxy(v14,Object);
// v17 = .unknown
v12.__proto__ = v17;
const v18 = (65536).indexOf();
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
