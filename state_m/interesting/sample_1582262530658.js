function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {c:v4,b:"valueOf",a:v4,e:"valueOf",toString:v4};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a", "e", "b", "c"])
const v6 = {c:v5,e:v5,b:1337,__proto__:v3,d:Set};
// v6 = .object(ofGroup: Object, withProperties: ["b", "c", "__proto__", "d", "e"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
try {
    const v12 = Function(v7,v10);
    // v12 = .unknown
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
