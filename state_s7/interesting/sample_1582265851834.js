function main() {
let v1 = "string";
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [v1,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {toString:"species",valueOf:v5,__proto__:v2};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__"])
for (const v8 in "boolean") {
    const v10 = Object.freeze(v2);
    // v10 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
