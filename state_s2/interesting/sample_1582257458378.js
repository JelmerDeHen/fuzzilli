function main() {
function v0(v1,v2) {
    let v5 = 0;
    while (v5 != 65537) {
        const v6 = v5 % 65537;
        // v6 = .number
        const v7 = v6 + 1;
        // v7 = .primitive
        v5 = v7;
        const v11 = [1337];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        v11["unscopable"] = Set;
        delete v11["unscopable"];
    }
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
