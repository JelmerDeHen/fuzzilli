function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            for (let v12 = 0; v12 < 3; v12++) {
                const v13 = "NEGATIVE_INFINITY" + v12;
                // v13 = .primitive
            }
            let v16 = 0;
            const v18 = v8 + 1;
            // v18 = .primitive
            v8 = v18;
        } while (v8 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
