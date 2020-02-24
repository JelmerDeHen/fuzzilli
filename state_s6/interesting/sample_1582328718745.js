function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {valueOf:v5,e:Function,b:13.37,length:1337,__proto__:"JC54uR.E*x",d:"JC54uR.E*x",constructor:v4};
// v6 = .object(ofGroup: Object, withProperties: ["e", "constructor", "d", "valueOf", "length", "b", "__proto__"])
try {
    const v8 = Float32Array.toString;
    // v8 = .unknown
    const v9 = v6.__proto__;
    // v9 = .object()
    const v10 = v8(v9);
    // v10 = .unknown
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();
