function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:v6,e:Function,b:13.37,length:1337,__proto__:"JC54uR.E*x",d:"JC54uR.E*x",constructor:v5};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "b", "valueOf", "d", "e"])
const v8 = {valueOf:13.37,c:1337,constructor:"JC54uR.E*x",e:v3,__proto__:1337,d:Function};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "d", "constructor", "e", "__proto__"])
let v9 = v8;
try {
    const v12 = NaN.toString;
    // v12 = .unknown
    const v13 = v7.__proto__;
    // v13 = .object()
    const v14 = v12(v13);
    // v14 = .unknown
} catch(v15) {
}
const v19 = v9 > Reflect;
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
