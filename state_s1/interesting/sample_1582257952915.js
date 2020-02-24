function main() {
const v1 = {c:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v2(v3,v4) {
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 7);
            const v21 = 1337 in v1;
            // v21 = .boolean
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            let v28 = 0;
            const v32 = v16 + 1;
            // v32 = .primitive
            v16 = v32;
        } while (v16 < 8);
    }
    const v33 = v12 + 1;
    // v33 = .primitive
    v12 = v33;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
