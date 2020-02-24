function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {valueOf:v5,e:Function,b:13.37,length:1337,__proto__:"JC54uR.E*x",d:"JC54uR.E*x",constructor:v4};
// v6 = .object(ofGroup: Object, withProperties: ["e", "b", "valueOf", "length", "__proto__", "constructor", "d"])
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
