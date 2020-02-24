function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
