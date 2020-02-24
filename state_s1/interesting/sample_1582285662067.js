function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        const v8 = "boolean".__proto__;
        // v8 = .object()
        const v9 = v8.search;
        // v9 = .unknown
        let v12 = 0;
        do {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v2;
            } while (v15 < 7);
            const v17 = v12 + 1;
            // v17 = .primitive
            v12 = v17;
        } while (v12 < 8);
    }
}
const v19 = v3(RegExp);
// v19 = .unknown
const v21 = 1337 | v2;
// v21 = .integer
const v22 = v3(v21,1);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
