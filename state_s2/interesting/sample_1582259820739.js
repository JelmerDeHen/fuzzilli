function main() {
const v7 = new Int16Array(19873);
// v7 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {b:13.37,d:1607264097,e:1607264097,constructor:v11,valueOf:WeakSet};
// v12 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "valueOf", "e", "__proto__"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "constructor", "d", "valueOf"])
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v32 = 0;
const v33 = "N0Xx92zvHQ".__proto__;
// v33 = .object()
const v34 = {set:Number,get:Number};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v36 = Object.setPrototypeOf(v33,Number);
// v36 = .object()
const v37 = gc();
// v37 = .undefined
const v38 = "object".constructor;
// v38 = .function()
const v39 = {set:v38,get:RegExp};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
}
%NeverOptimizeFunction(main);
main();
