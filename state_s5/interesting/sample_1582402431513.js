function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
