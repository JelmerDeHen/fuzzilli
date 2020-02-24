function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = undefined;
let v7 = 0;
while (v7 < 3) {
    const v8 = v1.unshift(v4,1337);
    // v8 = .integer
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
}
}
%NeverOptimizeFunction(main);
main();
