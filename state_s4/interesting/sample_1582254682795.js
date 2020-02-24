function main() {
const v2 = gc();
// v2 = .undefined
const v5 = 1337 == 13.37;
// v5 = .boolean
const v7 = Object();
// v7 = .object()
function v11(v12,v13) {
    let v20 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            let v27 = 0;
            do {
                const v28 = v27 + 1;
                // v28 = .primitive
                v27 = v28;
            } while (v27 < 7);
            let v31 = 0;
            const v35 = v24 + 1;
            // v35 = .primitive
            v24 = v35;
        } while (v24 < 8);
    }
    const v36 = v20 + 1;
    // v36 = .primitive
    v20 = v36;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v40 = v39;
const v41 = v11(v40);
// v41 = .unknown
const v43 = gc();
// v43 = .undefined
const v50 = 1337 == 13.37;
// v50 = .boolean
const v52 = Object();
// v52 = .object()
let v57 = 0;
const v58 = v57 + 1;
// v58 = .primitive
v57 = v58;
let v61 = 0;
const v62 = v61 + 1;
// v62 = .primitive
v61 = v62;
}
%NeverOptimizeFunction(main);
main();
