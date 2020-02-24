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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
