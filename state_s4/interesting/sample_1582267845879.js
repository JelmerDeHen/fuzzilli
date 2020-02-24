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
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
