function main() {
const v2 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "has", "deleteProperty"])
const v4 = new Proxy(Boolean,v2);
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
