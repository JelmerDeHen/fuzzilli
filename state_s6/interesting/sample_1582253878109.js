function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v6.constructor = v4;
const v8 = "iterator" != 4294967297;
// v8 = .boolean
for (let v12 = 0; v12 < 6; v12++) {
    "iterator".valueOf = v4;
}
v7.valueOf = 13.37;
const v13 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "valueOf", "b", "a"])
const v14 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v14 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "toString", "b"])
let v15 = v4;
const v17 = v6.length;
// v17 = .integer
const v19 = Object();
// v19 = .object()
}
%NeverOptimizeFunction(main);
main();
