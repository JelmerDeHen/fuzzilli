function main() {
let v4 = 0;
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = {length:"unscopable"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"unscopable"};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "constructor"], withMethods: ["toString"])
let v16 = 0;
const v18 = {get:Int16Array};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
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
