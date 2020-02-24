function main() {
function v2(v3,v4) {
    let v7 = 0;
    do {
        const v10 = parseFloat("symbol");
        // v10 = .float
        let v13 = 0;
        do {
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
        } while (v13 < 7);
        const v15 = v7 + 1;
        // v15 = .primitive
        v7 = v15;
    } while (v7 < 8);
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
const v19 = v2(v18);
// v19 = .unknown
const v20 = v2(1024,4.0);
// v20 = .unknown
const v21 = v2(v20,v18);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
