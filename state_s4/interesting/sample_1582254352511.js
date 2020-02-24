function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
for (const v7 in "object") {
    const v8 = {};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    v8.__proto__ = v1;
}
}
%NeverOptimizeFunction(main);
main();
