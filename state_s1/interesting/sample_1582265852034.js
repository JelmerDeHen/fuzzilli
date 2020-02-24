function main() {
let v1 = "string";
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [v1,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {toString:"species",valueOf:v5,__proto__:v2};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString"])
for (const v8 in "boolean") {
    const v10 = Object.freeze(v2);
    // v10 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
