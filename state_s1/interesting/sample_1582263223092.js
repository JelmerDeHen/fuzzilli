function main() {
let v4 = 0;
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = {length:"unscopable"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"unscopable"};
// v13 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__"], withMethods: ["toString"])
let v16 = 0;
const v18 = {get:Int16Array};
// v18 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v20 = Object.create(v13,1112105271,v18);
// v20 = .object()
const v21 = v16 + 1;
// v21 = .primitive
v16 = v21;
const v22 = "MAX_VALUE".startsWith("MAX_VALUE",9);
// v22 = .boolean
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
}
%NeverOptimizeFunction(main);
main();
