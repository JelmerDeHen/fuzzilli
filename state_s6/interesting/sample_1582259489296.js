function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [v3,v1];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = v4;
function v6(v7,v8,v9,v10,v11) {
}
function v12(v13,v14) {
    const v16 = Math.atanh(v5);
    // v16 = .number
    const v17 = v16 == v6;
    // v17 = .boolean
    const v21 = {length:"N0Xx92zvHQ"};
    // v21 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v22 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"N0Xx92zvHQ"};
    // v22 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
}
for (let v26 = 0; v26 < 100; v26++) {
    const v27 = v12();
    // v27 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
