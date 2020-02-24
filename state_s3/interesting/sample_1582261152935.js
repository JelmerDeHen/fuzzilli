function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = v2;
let v5 = undefined;
for (const v10 in "boolean") {
    let v13 = 0;
    let v15 = 1;
    function v22(v23,v24) {
        let v26 = v10;
        let v28 = 0;
        do {
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
            const v33 = v28 + 1;
            // v33 = .primitive
            v28 = v33;
        } while (v28 < 1337);
        const v34 = ~v26;
        // v34 = .boolean
    }
    const v36 = [1337];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v37 = v36;
    const v38 = v22(v37);
    // v38 = .unknown
    const v39 = v22();
    // v39 = .unknown
    const v46 = v13 + 1;
    // v46 = .primitive
    v13 = v46;
}
}
%NeverOptimizeFunction(main);
main();
