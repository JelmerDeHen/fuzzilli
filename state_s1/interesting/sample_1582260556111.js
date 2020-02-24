function main() {
const v1 = {b:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v3 = v1.b;
// v3 = .unknown
const v4 = v3.description;
// v4 = .unknown
for (let v7 = 0; v7 < 3; v7++) {
    let v10 = 0;
    function v11(v12,v13) {
        const v15 = {__proto__:v11,toString:v7,description:v10};
        // v15 = .object(ofGroup: Object, withProperties: ["toString", "description", "__proto__"], withMethods: ["__proto__"])
        const v16 = v15 instanceof v11;
        // v16 = .boolean
        for (const v17 in "asyncIterator") {
            if (v12) {
            } else {
            }
            const v19 = [13.37,13.37,13.37];
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 8);
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v26 = v25;
    const v27 = v11(v26);
    // v27 = .unknown
    const v28 = v10 + 1;
    // v28 = .primitive
    v10 = v28;
}
}
%NeverOptimizeFunction(main);
main();
