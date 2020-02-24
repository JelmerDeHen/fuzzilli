function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v5 = [13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = v5[Function];
// v7 = .unknown
try {
    const v8 = v7(v6,v2);
    // v8 = .unknown
} catch(v9) {
}
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = !0;
// v17 = .boolean
}
%NeverOptimizeFunction(main);
main();
