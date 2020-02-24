function main() {
function v0(v1,v2) {
    this.b = 9007199254740993;
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    return v0;
}
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v11 = v10;
const v12 = v0(v11);
// v12 = .unknown
for (let v16 = 0; v16 < 9; v16++) {
    const v17 = new v12();
    // v17 = .object()
}
}
%NeverOptimizeFunction(main);
main();
