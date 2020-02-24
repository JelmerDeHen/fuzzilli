function main() {
let v3 = 0;
let v6 = 0;
const v8 = [13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (let v12 = 0; v12 < 100; v12++) {
    let v14 = 1337;
    function v16(v17,v18) {
        for (const v20 in "number") {
            let v23 = 0;
            let v26 = 0;
            const v27 = v20 / 1;
            // v27 = .number
            v14 = v27;
            const v28 = v23 + 1;
            // v28 = .primitive
            v23 = v28;
        }
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v31 = v30;
    const v32 = v16(v31);
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
