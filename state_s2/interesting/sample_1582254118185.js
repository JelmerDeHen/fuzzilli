function main() {
let v11 = 0;
const v15 = v11 + 1;
// v15 = .primitive
v11 = v15;
const v21 = -Infinity;
// v21 = .float
const v23 = [];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v24 = {valueOf:v23,length:v21,length:127,e:127};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "length", "valueOf"])
const v25 = {c:v23,valueOf:v24,d:Array,a:1337};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "valueOf"], withMethods: ["d"])
for (let v44 = 0; v44 < 3; v44++) {
    const v45 = v25.d(v44,gc,1337,v44,v44);
    // v45 = .unknown
}
const v46 = 13.37 & 127;
// v46 = .integer
}
%NeverOptimizeFunction(main);
main();
