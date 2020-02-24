function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                let v9 = 0;
                do {
                    const v10 = v9 + 1;
                    // v10 = .primitive
                    v9 = v10;
                } while (v9 < v4);
            } catch(v11) {
                let v14 = 0;
                while (v14 == 10) {
                }
            }
            const v15 = v7 + 1;
            // v15 = .primitive
            v7 = v15;
        } while (v7 <= 8);
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
