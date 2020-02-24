function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {b:"split",__proto__:v2,constructor:1337};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__"])
function v4(v5,v6) {
    const v8 = v2.map(Number,v3);
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v4();
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
