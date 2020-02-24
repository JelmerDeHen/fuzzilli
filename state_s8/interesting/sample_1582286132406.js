function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = undefined;
delete v1[3];
v5 = 13.37;
let v8 = 0;
while (v8 < 3) {
    const v9 = v1.unshift(v5,1337);
    // v9 = .integer
    const v10 = v8 + 1;
    // v10 = .primitive
    v8 = v10;
}
}
%NeverOptimizeFunction(main);
main();
