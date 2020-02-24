function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        for (let v13 = 0; v13 < 100; v13++) {
            const v14 = isFinite("d");
            // v14 = .boolean
        }
        const v15 = v7 + 1;
        // v15 = .primitive
        v7 = v15;
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
