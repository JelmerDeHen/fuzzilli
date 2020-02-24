function main() {
const v2 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "deleteProperty"])
const v4 = new Proxy(Boolean,v2);
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
with ("e") {
    const v15 = v4(v10);
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
