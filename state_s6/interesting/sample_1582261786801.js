function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
let v8 = v7;
const v10 = {get:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v1,2804337340,v10);
// v12 = .undefined
v1.length = v8;
}
%NeverOptimizeFunction(main);
main();
