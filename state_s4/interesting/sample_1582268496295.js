function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = 0;
const v8 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "apply", "has"])
const v10 = new Proxy(Boolean,v8);
// v10 = .unknown
delete v10.length;
}
%NeverOptimizeFunction(main);
main();
