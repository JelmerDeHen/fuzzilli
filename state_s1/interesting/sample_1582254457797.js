function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {constructor:13.37,toString:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "a"], withMethods: ["toString"])
const v8 = {length:"N0Xx92zvHQ"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = {c:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v13 = v11[1024];
// v13 = .unknown
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v18 = {__proto__:3,constructor:v16,d:v12,valueOf:v13,length:13.37};
// v18 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "length", "constructor"])
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
}
%NeverOptimizeFunction(main);
main();
