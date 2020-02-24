function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
let v8 = v7;
const v10 = {get:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v1,2804337340,v10);
// v12 = .undefined
v1.length = v8;
}
%NeverOptimizeFunction(main);
main();
