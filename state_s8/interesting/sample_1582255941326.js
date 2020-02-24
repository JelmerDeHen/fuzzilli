function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = 0;
let v8 = 0;
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v11 = v10;
function v14(v15,v16) {
    let v20 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            } while (v26 < 1337);
            const v28 = v24 + 1;
            // v28 = .primitive
            v24 = v28;
        } while (v24 < 8);
        const v29 = {};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v31 = new Proxy(v11,v29);
        // v31 = .unknown
        const v32 = gc(0,...v31,v1,v24,0);
        // v32 = .undefined
    }
    const v33 = v20 + 1;
    // v33 = .primitive
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v14(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
