function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v5 = -1024;
while (v5 < 5) {
    const v7 = Object.defineProperty(v2,v5,Uint8ClampedArray);
    // v7 = .undefined
    const v8 = v5 + 1;
    // v8 = .primitive
    v5 = v8;
}
}
%NeverOptimizeFunction(main);
main();
