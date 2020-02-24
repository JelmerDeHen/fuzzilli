function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
