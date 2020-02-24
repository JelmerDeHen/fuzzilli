function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "__proto__"])
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
