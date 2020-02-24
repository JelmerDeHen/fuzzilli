function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                v11 = v12;
            } while (v11 < 7);
            const v13 = v7 + 1;
            // v13 = .primitive
            try {
                const v14 = Array.isArray(v2);
                // v14 = .boolean
            } catch(v15) {
            }
            v7 = v13;
        } while (v7 < 8);
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
