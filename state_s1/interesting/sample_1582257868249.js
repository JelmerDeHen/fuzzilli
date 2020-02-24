function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (let v14 = 0; v14 < 6; v14++) {
                for (let v18 = 0; v18 < 100; v18++) {
                    function v19(v20,v21) {
                    }
                }
            }
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                for (let v27 = 0; v27 < 4; v27++) {
                }
                v22 = v23;
            } while (v22 < 7);
            const v31 = v7 + 1;
            // v31 = .primitive
            v7 = v31;
        } while (v7 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
