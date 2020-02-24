function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v7 = .object(ofGroup: Object, withProperties: ["e", "b", "valueOf", "a", "length", "__proto__"])
let v8 = v4;
const v12 = [1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = "object".constructor;
// v13 = .function()
const v14 = v12 + 1;
// v14 = .primitive
let v15 = 1337;
const v18 = [13.37,13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v20 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "e", "b"])
let v21 = v18;
v20[v21] = 13.37;
const v30 = {constructor:v8,__proto__:13.37,...v6,...v15};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["join", "lastIndexOf", "slice", "findIndex", "reduceRight", "flatMap", "forEach", "shift", "toLocaleString", "reverse", "some", "entries", "find", "splice", "sort", "includes", "reduce", "flat", "toString", "unshift", "values", "concat", "indexOf", "every", "keys", "pop", "filter", "fill", "copyWithin", "push", "map"])
const v31 = {defineProperty:Object,ownKeys:gc,get:v13,has:v13,isExtensible:Object};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "has", "isExtensible", "ownKeys", "defineProperty"])
const v33 = new Proxy(v7,v31);
// v33 = .unknown
const v34 = gc();
// v34 = .undefined
}
%NeverOptimizeFunction(main);
main();
