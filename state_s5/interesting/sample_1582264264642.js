function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v3 = v2;
let v5 = undefined;
const v9 = {valueOf:1337,c:10};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
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
