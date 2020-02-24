function main() {
function v0(v1,v2) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                let v17 = 0;
                const v21 = 8 <= 0;
                // v21 = .boolean
                const v22 = v17 + 1;
                // v22 = .primitive
                v17 = v22;
                v13 = v14;
            } while (v13 < 7);
            let v25 = 0;
            const v26 = v10 + 1;
            // v26 = .primitive
            v10 = v26;
        } while (v10 < 8);
    }
    const v27 = v6 + 1;
    // v27 = .primitive
    v6 = v27;
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
