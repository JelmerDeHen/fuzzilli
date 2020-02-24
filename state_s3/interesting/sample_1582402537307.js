function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {length:v3,constructor:v3,b:-35834991};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "b"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
try {
    const v11 = Float32Array.toString;
    // v11 = .unknown
    const v12 = v11.call(1337,v4,v9,Float32Array,"undefined");
    // v12 = .unknown
    const v13 = v12.acosh();
    // v13 = .unknown
} catch(v14) {
}
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
