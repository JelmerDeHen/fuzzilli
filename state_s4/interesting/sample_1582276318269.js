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
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
