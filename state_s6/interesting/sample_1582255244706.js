function main() {
function v1(v2,v3) {
    for (const v10 in 0) {
    }
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 < 7);
            let v24 = 0;
            let v30 = 0;
            const v31 = v17 + 1;
            // v31 = .primitive
            v17 = v31;
        } while (v17 < 8);
    }
    const v32 = v13 + 1;
    // v32 = .primitive
    v13 = v32;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v37 = v36;
const v38 = v1(v37);
// v38 = .unknown
const v39 = v1();
// v39 = .unknown
const v40 = v1("undefined",4.0);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
