function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v7 = 1337;
const v9 = {c:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v10(v11,v12) {
    function v14(v15,v16) {
    }
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (const v23 in "boolean") {
        v22[255] = 0;
        let v26 = 0;
        do {
            let v29 = 0;
            while (v29 < 6) {
                const v30 = v22.some(v14);
                // v30 = .boolean
                const v31 = v29 + 1;
                // v31 = .primitive
                v29 = v31;
            }
            const v32 = v26 + 1;
            // v32 = .primitive
            v26 = v32;
        } while (v26 < 8);
    }
}
const v33 = v10(v7,v9);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
