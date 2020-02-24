function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v6.constructor = v4;
const v8 = "iterator" != 4294967297;
// v8 = .boolean
for (let v12 = 0; v12 < 6; v12++) {
    "iterator".valueOf = v4;
}
v7.valueOf = 13.37;
const v13 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "length", "a", "valueOf"])
const v14 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "e", "toString"])
let v15 = v4;
const v17 = v6.length;
// v17 = .integer
const v19 = Object();
// v19 = .object()
}
%NeverOptimizeFunction(main);
main();
