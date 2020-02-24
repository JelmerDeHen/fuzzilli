function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v4 = 0;
const v8 = v4 + 1;
// v8 = .primitive
v4 = v8;
const v12 = {set:Number};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v14 = Object.defineProperty(v1,"c",v12);
// v14 = .undefined
v1.length = 1;
let v26 = 0;
v1[2] = v26;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
}
%NeverOptimizeFunction(main);
main();
