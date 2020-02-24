function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
