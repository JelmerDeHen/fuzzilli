function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                for (let v16 = 0; v16 < 4; v16++) {
                    "object"[1] = 1337;
                }
                v11 = v12;
            } while (v11 < 7);
            const v19 = v8 - 1;
            // v19 = .primitive
            v8 = v19;
        } while ("e" < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v21;
const v23 = v1(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
