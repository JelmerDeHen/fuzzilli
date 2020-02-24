function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (let v7 = 0; v7 < 3; v7++) {
    function v8(v9,v10) {
        let v13 = 0;
        const v15 = [1337,1337,1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v16 = v15.pop();
        // v16 = .unknown
        for (let v20 = 0; v20 < 100; v20++) {
        }
        const v21 = v13 + 1;
        // v21 = .primitive
        v13 = v21;
    }
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v24 = v23;
    const v25 = v8(v24);
    // v25 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
