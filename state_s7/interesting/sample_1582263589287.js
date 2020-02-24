function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = "object".constructor;
// v12 = .function()
const v13 = v11 + 1;
// v13 = .primitive
const v14 = v12("object",v13,1337,9007199254740993,"symbol");
// v14 = .unknown
const v18 = "object".constructor;
// v18 = .function()
const v20 = {set:Object,get:v18};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v22 = Object.defineProperty(v1,1337,v20);
// v22 = .undefined
const v23 = Reflect.apply(v18,v3,v1);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
