function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5) {
    const v7 = "object".constructor;
    // v7 = .function()
    const v8 = v2.reduceRight(v7,Infinity);
    // v8 = .unknown
}
const v13 = {set:v3};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v15 = Object.defineProperty(v2,"a",v13);
// v15 = .undefined
for (let v16 = 0; v16 < 100; v16++) {
    const v17 = v3();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
