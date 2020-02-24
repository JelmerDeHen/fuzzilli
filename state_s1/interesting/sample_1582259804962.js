function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v10 = 0;
    const v11 = Object.getOwnPropertyDescriptor(Object,v6);
    // v11 = .object(withProperties: ["enumerable", "value", "writable", "configurable"])
    const v12 = {};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v14 = v12 > 13.37;
    // v14 = .boolean
    const v15 = v10 + 1;
    // v15 = .primitive
    v10 = v15;
}
}
%NeverOptimizeFunction(main);
main();
