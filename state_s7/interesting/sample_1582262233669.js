function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v8 = [13.37,13.37,13.37];
        // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v10 = [1337,1337,1337,1337];
        // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v11 = [1337,16,13.37,v10];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v12 = {valueOf:v11,c:v8};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
        const v14 = Math.cbrt(v12);
        // v14 = .number
        let v16 = 0;
        do {
            let v19 = 0;
            const v20 = v14 * v11;
            // v20 = .number
            do {
                const v21 = v19 + 1;
                // v21 = .primitive
                v19 = v21;
            } while (v19 < 7);
            const v22 = v16 + 1;
            // v22 = .primitive
            v16 = v22;
        } while (v16 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v25 = v24;
const v26 = v0(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
