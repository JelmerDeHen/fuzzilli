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
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        v11["unscopable"] = Set;
        delete v11["unscopable"];
    }
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
