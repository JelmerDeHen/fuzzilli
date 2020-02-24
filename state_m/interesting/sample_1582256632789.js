function main() {
let v1 = 0;
let v4 = 0;
function v5(v6,v7) {
    const v10 = [1337];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v11(v12,v13) {
        let v16 = 0;
        Array.prototype = 1337;
        do {
            if (v7) {
            } else {
                const v19 = v5(v4,v10);
                // v19 = .unknown
            }
            const v20 = v16 + 1;
            // v20 = .primitive
            v16 = v20;
        } while (v16 < 9);
    }
    const v21 = v11();
    // v21 = .unknown
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            v6.valueOf = v6;
        } while (v25 < 7);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v29 = v28;
const v30 = v5(v29);
// v30 = .unknown
const v31 = v5(v1,0);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
