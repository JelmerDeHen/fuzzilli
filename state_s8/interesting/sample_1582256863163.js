function main() {
const v1 = {c:String};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
for (let v5 = 0; v5 < 3; v5++) {
    function v6(v7,v8) {
        let v15 = 0;
        for (const v16 in "boolean") {
            let v19 = 0;
            do {
                let v22 = 0;
                const v24 = [1337,1337,1337,1337];
                // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v26 = Object.create(v24);
                // v26 = .object()
                const v27 = v22 + 1;
                // v27 = .primitive
                v22 = v27;
                let v30 = 0;
                const v31 = v19 + 1;
                // v31 = .primitive
                v19 = v31;
            } while (v19 < 8);
        }
        const v32 = v15 + 1;
        // v32 = .primitive
        v15 = v32;
    }
    const v35 = [1337];
    // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v36 = v35;
    const v37 = v6(v36);
    // v37 = .unknown
}
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
}
%NeverOptimizeFunction(main);
main();
