function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {valueOf:v5,length:13.37,d:127,e:127};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "valueOf", "length"])
const v7 = {c:v5,valueOf:v6,d:Array,a:1337};
// v7 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "a"], withMethods: ["d"])
const v11 = Array(127);
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
with (v11) {
    function v12(v13,v14) {
        'use strict'
    }
}
const v15 = gc();
// v15 = .undefined
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = gc(v7,"pvU0UUjoya",v5);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
