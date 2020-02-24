function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v8 = v6;
    do {
        let v11 = 0;
        const v12 = v8 + 1;
        // v12 = .primitive
        v8 = v12;
    } while (v8 < 8);
}
}
%NeverOptimizeFunction(main);
main();
