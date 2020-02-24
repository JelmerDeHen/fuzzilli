function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                const v16 = Symbol.toStringTag;
                // v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                const v17 = v16[v16];
                // v17 = .unknown
                v10 = v11;
            } while (v10 < 7);
            const v18 = v7 + 1;
            // v18 = .primitive
            v7 = v18;
        } while (v7 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
