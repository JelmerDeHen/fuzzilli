function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = 0;
const v8 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "deleteProperty", "has"])
const v10 = new Proxy(Boolean,v8);
// v10 = .unknown
delete v10.length;
}
%NeverOptimizeFunction(main);
main();
