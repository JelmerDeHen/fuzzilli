function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
let v8 = v7;
const v10 = {get:Number};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v1,2804337340,v10);
// v12 = .undefined
v1.length = v8;
}
%NeverOptimizeFunction(main);
main();
