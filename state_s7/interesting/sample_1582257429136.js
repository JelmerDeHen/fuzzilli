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
                const v22 = 1337 / v17;
                // v22 = .number
                v20 = v21;
            } while (v20 < 7);
            let v28 = 0;
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
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v37 = v36;
const v38 = v0(v37);
// v38 = .unknown
const v40 = [1337,1337,1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v43 = 0;
const v45 = v43 + 1;
// v45 = .primitive
v43 = v45;
}
%NeverOptimizeFunction(main);
main();
