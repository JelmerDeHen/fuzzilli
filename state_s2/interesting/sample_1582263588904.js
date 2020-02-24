function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = "object".constructor;
// v12 = .function()
const v13 = v11 + 1;
// v13 = .primitive
const v14 = v12("object",v13,1337,9007199254740993,"symbol");
// v14 = .unknown
const v18 = "object".constructor;
// v18 = .function()
const v20 = {set:Object,get:v18};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v22 = Object.defineProperty(v1,1337,v20);
// v22 = .undefined
const v23 = Reflect.apply(v18,v3,v1);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
