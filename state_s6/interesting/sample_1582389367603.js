function main() {
const v5 = [13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = 1337 < v5;
// v7 = .boolean
if (v7) {
    const v8 = 1000 instanceof 1337;
    // v8 = .boolean
} else {
}
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
