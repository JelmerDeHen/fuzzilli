function main() {
let v4 = 0;
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = {length:"unscopable"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v13 = {constructor:13.37,length:13.37,__proto__:v12,toString:Number,a:"unscopable"};
// v13 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
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
