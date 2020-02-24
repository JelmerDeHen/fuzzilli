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
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v15 = v14;
const v16 = v0(v15);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
