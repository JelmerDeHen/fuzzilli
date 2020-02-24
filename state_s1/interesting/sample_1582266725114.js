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
    // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v31 = v30;
    const v32 = v6(v31);
    // v32 = .unknown
    v4 = v5;
} while (v4 < 7);
}
%NeverOptimizeFunction(main);
main();
