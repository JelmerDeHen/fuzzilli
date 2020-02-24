function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [2,2,2];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v8 = 0;
v2.toString = RegExp;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = {b:v5,length:2,valueOf:2,toString:RegExp};
// v10 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "length"], withMethods: ["toString"])
const v11 = {length:v2,valueOf:v10,c:v4,e:2,__proto__:v5};
// v11 = .object(ofGroup: Object, withProperties: ["e", "length", "valueOf", "__proto__", "c"])
const v15 = [1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = [];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v17 = {c:v16,b:"string",a:v16,e:"string",toString:v16};
// v17 = .object(ofGroup: Object, withProperties: ["a", "toString", "c", "__proto__", "e", "b"])
const v18 = {c:v17,e:v17,b:1337,__proto__:v15,d:Set};
// v18 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "c", "e"])
let v19 = v18;
v19 = v11;
const v22 = {constructor:"boolean",length:9007199254740993};
// v22 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
try {
    const v24 = Function(v19,v22);
    // v24 = .unknown
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
