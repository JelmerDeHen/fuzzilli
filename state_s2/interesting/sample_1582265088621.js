function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [2,2,2];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v8 = 0;
v2.toString = RegExp;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = {b:v5,length:2,valueOf:2,toString:RegExp};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length"], withMethods: ["toString"])
const v11 = {length:v2,valueOf:v10,c:v4,e:2,__proto__:v5};
// v11 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "e", "length", "__proto__"])
const v15 = [1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = [];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v17 = {c:v16,b:"string",a:v16,e:"string",toString:v16};
// v17 = .object(ofGroup: Object, withProperties: ["c", "e", "__proto__", "toString", "a", "b"])
const v18 = {c:v17,e:v17,b:1337,__proto__:v15,d:Set};
// v18 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "b", "e"])
let v19 = v18;
v19 = v11;
const v22 = {constructor:"boolean",length:9007199254740993};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
try {
    const v24 = Function(v19,v22);
    // v24 = .unknown
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
