function main() {
let v1 = "string";
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [v1,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {toString:"species",valueOf:v5,__proto__:v2};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__"])
for (const v8 in "boolean") {
    const v10 = Object.freeze(v2);
    // v10 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
