function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            function v12(v13,v14,v15,v16) {
            }
            const v17 = v12 instanceof Function;
            // v17 = .boolean
            do {
                const v18 = v10 + 1;
                // v18 = .primitive
                v10 = v18;
            } while (v10 < 7);
            const v19 = v7 + 1;
            // v19 = .primitive
            v7 = v19;
        } while (v7 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
