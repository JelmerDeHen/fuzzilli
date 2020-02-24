function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = 0;
const v8 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "apply", "has"])
const v10 = new Proxy(Boolean,v8);
// v10 = .unknown
delete v10.length;
}
%NeverOptimizeFunction(main);
main();
