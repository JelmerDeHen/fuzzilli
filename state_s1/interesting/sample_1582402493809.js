function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
