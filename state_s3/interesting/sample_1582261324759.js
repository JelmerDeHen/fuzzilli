function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
