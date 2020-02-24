function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
