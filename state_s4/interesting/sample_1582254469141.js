function main() {
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v32 = "string" + 1;
// v32 = .primitive
const v33 = "string".endsWith("string",1337);
// v33 = .boolean
let v56 = 0;
const v60 = v56 + 1;
// v60 = .primitive
v56 = v60;
}
%NeverOptimizeFunction(main);
main();
