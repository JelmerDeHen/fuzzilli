function main() {
const v6 = [0.0,-65536,-0.0];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
v6[1337] = 0;
let v8 = 0;
while (v8 < 1337) {
    const v9 = v6.push(10000);
    // v9 = .integer
    const v10 = v8 + 1;
    // v10 = .primitive
    v8 = v10;
}
}
%NeverOptimizeFunction(main);
main();
