function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        let v12 = 0;
        function v13(v14,v15) {
            let v23 = 0;
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            for (let v30 = 0; v30 < 4; v30 = v30 + "boolean") {
            }
            v26 = v27;
            const v31 = v23 + 1;
            // v31 = .primitive
            v23 = v31;
        }
        const v33 = [1337];
        // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v34 = v33;
        const v35 = v13(v34);
        // v35 = .unknown
        const v36 = v9 + 1;
        // v36 = .primitive
        v9 = v36;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
