function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            do {
                for (let v19 = 0; v19 < 100; v19++) {
                }
                const v20 = v15 + 1;
                // v20 = .primitive
                v15 = v20;
            } while (v15 < 7);
            const v21 = v7 + 1;
            // v21 = .primitive
            v12 = v21;
        } while (v12 < 8);
    }
}
const v22 = v5();
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
