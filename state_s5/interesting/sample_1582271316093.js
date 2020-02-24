function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "d"])
function v6(v7,v8) {
    const v10 = v7 > 1337;
    // v10 = .boolean
    const v11 = Math.floor(v4);
    // v11 = .number
    return v11;
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v6();
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
