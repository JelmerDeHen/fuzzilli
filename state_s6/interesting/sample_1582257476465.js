function main() {
let v2 = 0;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = v2 + 1;
// v7 = .primitive
v2 = v7;
function v8(v9,v10) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        try {
            let v23 = "boolean";
            const v26 = DataView(4294967296);
            // v26 = .unknown
        } catch(v27) {
            for (let v31 = 0; v31 < 100; v31++) {
                v27.length = 5;
            }
        }
        const v40 = v21 + 1;
        // v40 = .primitive
        v21 = v40;
    }
    const v41 = v17 + 1;
    // v41 = .primitive
    v17 = v41;
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v45 = v44;
const v46 = v8(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
