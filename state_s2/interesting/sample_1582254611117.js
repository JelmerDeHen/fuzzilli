function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v15 = [];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = {valueOf:v15,length:13.37,d:127,e:127};
// v16 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__", "e", "valueOf"])
let v17 = v16;
const v20 = v16[v17];
// v20 = .unknown
function v22(v23,v24,v25) {
    return v17;
}
v17 = 13.37;
const v28 = [];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v29 = {valueOf:v28,length:13.37,d:127,e:127};
// v29 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d", "e", "valueOf"])
const v30 = {c:v28,valueOf:v29,d:Array,a:1337};
// v30 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "valueOf"], withMethods: ["d"])
}
%NeverOptimizeFunction(main);
main();
