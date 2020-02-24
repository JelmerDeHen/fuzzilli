function main() {
let v2 = undefined;
let v6 = 0;
try {
    const v10 = [13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v12 = [1337,v10,5,v10];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    for (const v14 in v12) {
        const v15 = JSON.parse(v14,ArrayBuffer);
        // v15 = .unknown
    }
    let v17 = 0;
} catch(v19) {
}
const v20 = v6 + 1;
// v20 = .primitive
v6 = v20;
}
%NeverOptimizeFunction(main);
main();
