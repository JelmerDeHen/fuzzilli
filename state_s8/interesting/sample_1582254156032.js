function main() {
const v1 = (3156875969)[7];
// v1 = .unknown
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v4 = v3;
const v6 = [-65537];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v6;
v4.valueOf = v3;
const v10 = {get:String};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v12 = Object.defineProperty(v7,-1298306641,v10);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
