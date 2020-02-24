function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
