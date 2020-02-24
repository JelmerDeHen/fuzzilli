function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v9 = 0;
            do {
                const v10 = v9 + 1;
                // v10 = .primitive
                v9 = v10;
            } while (v9 < v7);
            const v11 = v7 + 1;
            // v11 = .primitive
            v7 = v11;
        } while (v7 < 8);
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
