function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = undefined;
for (const v10 in "object") {
    function v12(v13,v14) {
        let v17 = 0;
        const v18 = !v17;
        // v18 = .boolean
        const v19 = "object" + v18;
        // v19 = .primitive
    }
    for (let v23 = 0; v23 < 100; v23++) {
        const v24 = v12();
        // v24 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();
