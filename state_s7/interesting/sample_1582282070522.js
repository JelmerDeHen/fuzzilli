function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = "boolean".__proto__;
            // v8 = .object()
            const v9 = "boolean" - 1;
            // v9 = .primitive
            let v12 = 0;
            while (v12 < 10) {
                const v13 = v8.padStart(v9);
                // v13 = .unknown
                const v14 = v12 + 1;
                // v14 = .primitive
                v12 = v14;
            }
            let v17 = 0;
            const v18 = v7 + 1;
            // v18 = .primitive
            v7 = v18;
        } while (v7 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
