function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v15 = [1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v16 = {valueOf:"e",length:1337,a:v15,b:v15,e:1337};
// v16 = .object(ofGroup: Object, withProperties: ["b", "a", "e", "length", "valueOf", "__proto__"])
const v17 = Boolean.__proto__;
// v17 = .unknown
const v18 = v17(13.37,v16,13.37,13.37);
// v18 = .unknown
let v32 = 0;
let v46 = 0;
let v49 = 0;
let v52 = 0;
let v59 = 0;
}
%NeverOptimizeFunction(main);
main();
