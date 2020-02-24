function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = v2;
let v5 = undefined;
const v9 = {valueOf:1337,c:10};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf"])
function v10(v11,v12) {
    const v15 = Object.seal(Array);
    // v15 = .object()
}
const v16 = v10(v9);
// v16 = .unknown
const v18 = Object.isExtensible(Array);
// v18 = .boolean
}
%NeverOptimizeFunction(main);
main();
