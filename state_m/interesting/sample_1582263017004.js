function main() {
const v1 = (1337).toString();
// v1 = .unknown
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = Reflect.set(v3,v1,1337,"number");
// v7 = .boolean
const v11 = [3156875969,3156875969,1337,DataView];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v21 = v14 + 1;
// v21 = .primitive
v14 = v21;
}
%NeverOptimizeFunction(main);
main();
