function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [v3,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {__proto__:v4,a:v3,valueOf:13.37,length:v3,toString:Promise};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "length", "a"])
let v10 = 0;
let v13 = 0;
let v16 = 0;
let v19 = 0;
const v21 = {get:Promise};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v23 = Object.defineProperty(v4,-1024,v21);
// v23 = .undefined
}
%NeverOptimizeFunction(main);
main();
