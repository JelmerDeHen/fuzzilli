function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
