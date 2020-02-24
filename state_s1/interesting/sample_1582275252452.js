function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v1.__proto__ = null;
let v7 = 0;
while (v7 < 9) {
    let v10 = 0;
    do {
        const v11 = v10 + 1;
        // v11 = .primitive
        v10 = v11;
    } while (v10 < 6);
    const v12 = v7 + 1;
    // v12 = .primitive
    v7 = v12;
}
v1[0] = 0;
}
%NeverOptimizeFunction(main);
main();
