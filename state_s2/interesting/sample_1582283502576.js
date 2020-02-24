function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = Object.prototype;
// v3 = .object()
function v4(v5,v6) {
    for (const v8 in "boolean") {
        const v11 = v3.description;
        // v11 = .unknown
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
        } while (v12 < 7);
    }
}
v1[1] = v4;
for (const v14 of v1) {
    v3[-4103680879] = v14;
}
const v15 = v4();
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
