function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = ["undefined",13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7) {
    let v12 = 0;
    const v13 = Number.isFinite();
    // v13 = .boolean
    const v14 = v12 + 1;
    // v14 = .primitive
    v12 = v14;
    let v17 = 0;
    do {
        let v20 = 0;
        do {
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
        } while (v20 < 7);
        const v22 = v17 + 1;
        // v22 = .primitive
        v17 = v22;
    } while (v17 < 8);
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v5(v26);
// v27 = .unknown
const v28 = v5("boolean");
// v28 = .unknown
const v29 = v5(v28,v4);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
