function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
function v8(v9,v10,v11,v12,...v13) {
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v18 = v17;
    const v19 = Math.pow(v18,-1);
    // v19 = .number
    const v20 = Math.exp(v19);
    // v20 = .number
}
const v21 = v8(1337);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
