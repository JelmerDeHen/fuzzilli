function main() {
const v2 = ["__proto__"];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5) {
    const v8 = "object".constructor;
    // v8 = .function()
    Object["__proto__"] = v2;
    const v9 = v2.reduceRight(v8,Infinity);
    // v9 = .unknown
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v3();
    // v14 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
