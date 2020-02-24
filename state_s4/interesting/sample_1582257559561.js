function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 1337;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                for (let v22 = 0; v22 < 4; v22++) {
                    "object"[1] = 1337;
                }
                v17 = v18;
            } while (v17 != 7);
            const v25 = v14 + 1;
            // v25 = .primitive
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v14 = v25;
        } while ("e" < 8);
    }
    return v5;
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v32 = v31;
const v33 = v7(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
