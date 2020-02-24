function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                const v8 = !v0;
                // v8 = .boolean
                const v10 = Symbol.toPrimitive;
                // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                v2[v10] = 0;
                let v14 = 0;
                let v16 = 0;
                let v19 = 0;
                let v21 = 0;
            } catch(v22) {
                let v25 = 0;
            }
            const v26 = v7 + 1;
            // v26 = .primitive
            v7 = v26;
        } while (v7 <= 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
