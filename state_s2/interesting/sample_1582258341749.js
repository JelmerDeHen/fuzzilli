function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,v3,13.37,1024];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {length:"N0Xx92zvHQ"};
// v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
// v13 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
const v15 = Number[-536870912];
// v15 = .unknown
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v22 = {get:Number,set:Number};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v24 = Object.defineProperty(this,"d",v22);
// v24 = .undefined
let v27 = 0;
}
%NeverOptimizeFunction(main);
main();
