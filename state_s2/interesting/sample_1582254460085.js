function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (let v11 = 0; v11 < 100; v11++) {
}
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = {valueOf:v12,length:13.37,d:127,e:127};
// v13 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "valueOf", "length"])
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v20 = {valueOf:v19,length:13.37,d:-65536,e:-65536};
// v20 = .object(ofGroup: Object, withProperties: ["d", "e", "valueOf", "length", "__proto__"])
const v21 = {c:v19,valueOf:v20,d:Array,a:1337};
// v21 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf"], withMethods: ["d"])
const v24 = [13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v4.__proto__ = v24;
const v28 = (127)[v2];
// v28 = .unknown
const v29 = "object".constructor;
// v29 = .function()
const v31 = {...v24,...v13,...v28,...v29,...0};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "valueOf", "d", "e"], withMethods: ["copyWithin", "fill", "some", "entries", "pop", "shift", "reduce", "unshift", "filter", "slice", "flat", "map", "flatMap", "values", "lastIndexOf", "forEach", "toLocaleString", "find", "push", "concat", "findIndex", "keys", "indexOf", "includes", "splice", "reduceRight", "reverse", "sort", "every", "join", "toString"])
v2.length = 127;
}
%NeverOptimizeFunction(main);
main();
