function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {valueOf:v6,e:Function,b:13.37,length:1337,__proto__:"JC54uR.E*x",d:"JC54uR.E*x",constructor:v5};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "d", "e", "b", "length"])
const v8 = {valueOf:13.37,c:1337,constructor:"JC54uR.E*x",e:v3,__proto__:1337,d:Function};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "e", "constructor", "d", "__proto__"])
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
