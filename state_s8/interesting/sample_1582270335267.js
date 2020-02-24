function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b", "d"])
function v6(v7,v8) {
    const v10 = v7 > 1337;
    // v10 = .boolean
    delete v6[Math];
    const v11 = Math.floor(v4);
    // v11 = .number
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v6();
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
