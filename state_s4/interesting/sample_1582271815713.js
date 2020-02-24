function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {toString:-3561764986,constructor:v3,a:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "a", "constructor", "__proto__"])
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [v8,471091797,DataView];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v10(v11,v12) {
    for (const v15 in "boolean") {
        const v18 = Symbol.toStringTag;
        // v18 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        "boolean"[v18] = 1;
        v4[3] = v15;
        let v20 = 0;
        do {
            try {
                let v23 = 0;
                do {
                    const v24 = v23 + 1;
                    // v24 = .primitive
                    v23 = v24;
                    v9[v23] = 7;
                } while (v23 < 7);
            } catch(v25) {
            }
            const v26 = v20 + 1;
            // v26 = .primitive
            v20 = v26;
        } while (v20 < 8);
    }
}
const v27 = v10();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
