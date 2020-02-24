function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "a"], withMethods: ["toString"])
let v8 = v7;
const v10 = {get:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v1,2804337340,v10);
// v12 = .undefined
v1.length = v8;
}
%NeverOptimizeFunction(main);
main();
