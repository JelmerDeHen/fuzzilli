function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v10(v11,v12) {
    const v14 = arguments.e;
    // v14 = .unknown
    const v16 = gc(...arguments);
    // v16 = .undefined
    let v18 = 0;
    while (v18 < 1337) {
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
    }
}
const v20 = v9.sort(v10);
// v20 = .undefined
}
%NeverOptimizeFunction(main);
main();
