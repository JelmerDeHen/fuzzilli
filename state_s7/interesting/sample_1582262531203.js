function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {c:v4,b:"valueOf",a:v4,e:"valueOf",toString:v4};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "e", "b", "toString", "c"])
const v6 = {c:v5,e:v5,b:1337,__proto__:v3,d:Set};
// v6 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "c", "e"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
try {
    const v12 = Function(v7,v10);
    // v12 = .unknown
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
