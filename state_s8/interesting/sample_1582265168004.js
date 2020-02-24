function main() {
function v0(v1,v2) {
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                let v26 = 0;
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
                v19 = v20;
            } while (v19 < 7);
            let v30 = 0;
            const v34 = v16 + 1;
            // v34 = .primitive
            v16 = v34;
            const v39 = Array(1);
            // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v40 = v39.includes(1337,"object");
            // v40 = .boolean
        } while (v16 < 8);
    }
    const v41 = v12 + 1;
    // v41 = .primitive
    v12 = v41;
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v45 = v44;
const v46 = v0(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
