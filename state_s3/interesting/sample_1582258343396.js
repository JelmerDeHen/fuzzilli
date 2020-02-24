function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,v3,13.37,1024];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = {length:"N0Xx92zvHQ"};
// v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"N0Xx92zvHQ"};
// v13 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
const v15 = Number[-536870912];
// v15 = .unknown
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v22 = {get:Number,set:Number};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v24 = Object.defineProperty(this,"d",v22);
// v24 = .undefined
let v27 = 0;
}
%NeverOptimizeFunction(main);
main();
