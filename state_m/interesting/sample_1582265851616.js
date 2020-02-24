function main() {
let v1 = "string";
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [v1,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {toString:"species",valueOf:v5,__proto__:v2};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf"])
for (const v8 in "boolean") {
    const v10 = Object.freeze(v2);
    // v10 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
