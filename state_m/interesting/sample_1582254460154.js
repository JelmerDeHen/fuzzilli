function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (let v11 = 0; v11 < 100; v11++) {
}
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = {valueOf:v12,length:13.37,d:127,e:127};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "length", "d"])
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v20 = {valueOf:v19,length:13.37,d:-65536,e:-65536};
// v20 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "e", "d", "__proto__"])
const v21 = {c:v19,valueOf:v20,d:Array,a:1337};
// v21 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf"], withMethods: ["d"])
const v24 = [13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v4.__proto__ = v24;
const v28 = (127)[v2];
// v28 = .unknown
const v29 = "object".constructor;
// v29 = .function()
const v31 = {...v24,...v13,...v28,...v29,...0};
// v31 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__", "constructor", "e", "length"], withMethods: ["flat", "findIndex", "shift", "keys", "splice", "toString", "forEach", "reduce", "indexOf", "reduceRight", "fill", "entries", "map", "reverse", "find", "concat", "flatMap", "includes", "slice", "pop", "copyWithin", "toLocaleString", "join", "values", "push", "unshift", "filter", "lastIndexOf", "sort", "some", "every"])
v2.length = 127;
}
%NeverOptimizeFunction(main);
main();
