function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {c:v4,b:"valueOf",a:v4,e:"valueOf",toString:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "c", "b", "e", "a"])
const v6 = {c:v5,e:v5,b:1337,__proto__:v3,d:Set};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "c", "e", "d"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
try {
    const v12 = Function(v7,v10);
    // v12 = .unknown
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
