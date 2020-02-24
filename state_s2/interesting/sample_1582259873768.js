function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {valueOf:4294967295,a:v2,b:v2,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "toString", "b"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v15 = [1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            for (const v16 of v15) {
                const v17 = ~v16;
                // v17 = .boolean
                const v18 = v15 == v3;
                // v18 = .boolean
            }
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            const v24 = v11 + 1;
            // v24 = .primitive
            v11 = v24;
        } while (v11 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v27 = v26;
const v28 = v4(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
