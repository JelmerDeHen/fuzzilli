function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v14 = [isNaN,v13,"NEGATIVE_INFINITY",13.37];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = {toString:v11,valueOf:2147483648,b:"NEGATIVE_INFINITY",length:isNaN,__proto__:isNaN,b:isNaN,d:13.37,a:2147483648,c:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "c", "d", "a", "b"], withMethods: ["length", "b", "__proto__"])
const v16 = isNaN.bind(v14);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
