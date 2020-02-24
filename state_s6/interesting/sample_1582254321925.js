function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "valueOf", "length", "a"])
const v9 = "object".constructor;
// v9 = .function()
const v12 = [13.37,13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v14 = .object(ofGroup: Object, withProperties: ["b", "toString", "d", "e", "__proto__"])
let v15 = v12;
v14[v15] = 13.37;
const v19 = {defineProperty:Object,ownKeys:gc,get:v9,has:v9,isExtensible:Object};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "defineProperty", "ownKeys", "isExtensible", "has"])
const v21 = new Proxy(v6,v19);
// v21 = .unknown
const v22 = gc();
// v22 = .undefined
const v23 = 10 === v22;
// v23 = .boolean
const v24 = gc();
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
