function main() {
function v1(v2,v3) {
    for (const v5 in "asyncIterator") {
        let v8 = 0;
        do {
            let v10 = -4084834605;
            while (v10 < 5) {
                const v11 = v10 % 5;
                // v11 = .number
                const v12 = v11 + 1;
                // v12 = .primitive
                v10 = v12;
            }
            const v13 = v8 + 1;
            // v13 = .primitive
            v8 = v13;
        } while (v8 < 8);
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v16 = v15;
const v17 = v1(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
