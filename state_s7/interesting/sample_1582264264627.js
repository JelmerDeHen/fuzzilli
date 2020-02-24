function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v3 = v2;
let v5 = undefined;
const v9 = {valueOf:1337,c:10};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__"])
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
