function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = v2;
let v5 = undefined;
const v9 = {valueOf:1337,c:10};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__"])
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
