function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                const v13 = v11 << -2.220446049250313e-16;
                // v13 = .integer
                v11 = v12;
            } while (v11 < 7);
            const v14 = v8 + 1;
            // v14 = .primitive
            v8 = v14;
        } while (v8 <= 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
