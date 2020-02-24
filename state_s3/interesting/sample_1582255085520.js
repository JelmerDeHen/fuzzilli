function main() {
function v2(v3,v4) {
    const v5 = v3 in v2;
    // v5 = .boolean
    let v12 = 0;
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            const v31 = v16 + 1;
            // v31 = .primitive
            v16 = v31;
        } while (v16 < 8);
    }
    const v32 = v12 + 1;
    // v32 = .primitive
    v12 = v32;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
const v39 = v2(1024,4.0);
// v39 = .unknown
const v40 = v37.reduce(v2,NaN);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
