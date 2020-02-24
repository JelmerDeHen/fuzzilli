function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:2147483647};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v7(v8,v9) {
    const v10 = {get:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    try {
        const v12 = v5.__proto__;
        // v12 = .object()
        for (const v13 in v2) {
        }
        v12[v12] = "undefined";
    } catch(v14) {
    }
}
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v7();
    // v19 = .unknown
}
let v22 = 0;
const v23 = v2.findIndex(v7,v6);
// v23 = .integer
}
%NeverOptimizeFunction(main);
main();
