function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
