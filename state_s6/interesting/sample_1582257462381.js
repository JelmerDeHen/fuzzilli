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
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        v11["unscopable"] = Set;
        delete v11["unscopable"];
    }
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
