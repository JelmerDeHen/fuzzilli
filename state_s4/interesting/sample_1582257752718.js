function main() {
let v1 = "MAX_SAFE_INTEGER";
function v2(v3,v4) {
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            const v17 = "boolean" + v1;
            // v17 = .primitive
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 < 7);
            let v24 = 0;
            const v28 = v16 + 1;
            // v28 = .primitive
            v16 = v28;
        } while (v16 < 8);
    }
    const v29 = v12 + 1;
    // v29 = .primitive
    v12 = v29;
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v33 = v32;
const v34 = v2(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();