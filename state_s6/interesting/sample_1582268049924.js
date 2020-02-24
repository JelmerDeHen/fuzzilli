function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        // v6 = .primitive
        for (const v8 in "object") {
            const v10 = "replace".__proto__;
            // v10 = .object()
            const v11 = v10.match;
            // v11 = .unknown
            for (const v12 in "replace") {
            }
        }
        v5 = v6;
    } while (v5 < 8);
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v15 = v14;
const v16 = v0(v15);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
