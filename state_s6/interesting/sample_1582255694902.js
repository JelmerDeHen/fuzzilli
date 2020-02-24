function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,v3];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:v5,a:v5,__proto__:v5};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b"])
let v7 = eval;
function v8(v9,v10) {
    try {
        v5.toString = v7;
    } catch(v11) {
    }
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v8();
    // v16 = .unknown
    const v17 = v5.__proto__;
    // v17 = .object()
}
}
%NeverOptimizeFunction(main);
main();
