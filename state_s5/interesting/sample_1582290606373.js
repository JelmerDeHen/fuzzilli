function main() {
const v6 = [13.37,-65536,-0.0];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v6[1337] = 0;
let v8 = 0;
while (v8 < 1337) {
    const v9 = v6.push(1337);
    // v9 = .integer
    const v10 = v8 + 1;
    // v10 = .primitive
    v8 = v10;
}
}
%NeverOptimizeFunction(main);
main();
