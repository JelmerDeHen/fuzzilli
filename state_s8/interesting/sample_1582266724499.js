function main() {
let v4 = 0;
do {
    const v5 = v4 + 1;
    // v5 = .primitive
    function v6(v7,v8) {
        arguments[1337] = "boolean";
        for (let v13 = 0; v13 < 10; v13++) {
            function v14(v15,v16) {
            }
        }
        let v25 = 0;
        let v28 = 0;
        arguments[1] = "boolean";
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v31 = v30;
    const v32 = v6(v31);
    // v32 = .unknown
    v4 = v5;
} while (v4 < 7);
}
%NeverOptimizeFunction(main);
main();
