function main() {
const v1 = {b:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v3 = v1.b;
// v3 = .unknown
const v4 = v3.description;
// v4 = .unknown
for (let v7 = 0; v7 < 3; v7++) {
    let v10 = 0;
    function v11(v12,v13) {
        const v15 = {__proto__:v11,toString:v7,description:v10};
        // v15 = .object(ofGroup: Object, withProperties: ["description", "toString", "__proto__"], withMethods: ["__proto__"])
        const v16 = v15 instanceof v11;
        // v16 = .boolean
        for (const v17 in "asyncIterator") {
            if (v12) {
            } else {
            }
            const v19 = [13.37,13.37,13.37];
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 8);
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
