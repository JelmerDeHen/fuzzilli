function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                const v8 = !v0;
                // v8 = .boolean
                const v10 = Symbol.toPrimitive;
                // v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
