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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
