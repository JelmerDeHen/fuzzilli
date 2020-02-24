function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {b:"split",__proto__:v2,constructor:1337};
// v3 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor"])
function v4(v5,v6) {
    const v7 = v2.map(v4,v3);
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = v4();
    // v12 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
