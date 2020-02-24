function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["b", "toString", "e", "d", "__proto__"])
const v7 = {b:2614760098,e:2614760098,toString:Uint16Array,d:Uint16Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "toString", "b"])
const v9 = "object".byteLength;
// v9 = .unknown
const v10 = v2.__proto__;
// v10 = .object()
const v12 = {set:v9};
// v12 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
const v14 = Object.defineProperty(v10,-2,v12);
// v14 = .undefined
delete v12.__proto__;
}
%NeverOptimizeFunction(main);
main();
