function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
