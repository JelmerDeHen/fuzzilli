function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,v2,13.37,1024];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {length:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
let v10 = v9;
const v13 = {get:gc};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v15 = Object.defineProperty(v10,3,v13);
// v15 = .undefined
const v20 = v15 in v4;
// v20 = .boolean
}
%NeverOptimizeFunction(main);
main();
