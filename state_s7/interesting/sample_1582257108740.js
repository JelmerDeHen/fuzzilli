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
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
