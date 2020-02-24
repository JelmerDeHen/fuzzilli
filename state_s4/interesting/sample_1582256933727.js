function main() {
function v0(v1,v2) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                const v22 = 1337 / v21;
                // v22 = .number
                for (let v26 = 0; v26 < 4; v26++) {
                }
                v20 = v21;
            } while (v20 < 7);
            let v29 = 0;
            const v32 = v17 + 1;
            // v32 = .primitive
            v17 = v32;
        } while (v17 < 8);
    }
    const v33 = v13 + 1;
    // v33 = .primitive
    v13 = v33;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v0(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
