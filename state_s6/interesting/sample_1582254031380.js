function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "length", "e", "valueOf"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "e", "__proto__", "toString"])
let v10 = v4;
v8[v6] = v10;
const v15 = [13.37,13.37,Uint16Array,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "e", "b", "valueOf", "length"])
let v19 = v15;
const v23 = [1337,1337,1337,v10];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v24 = "object".constructor;
// v24 = .function()
v15.constructor = "iterator";
const v25 = typeof 4294967297;
// v25 = .string
const v27 = v25 === "object";
// v27 = .boolean
const v29 = {set:v24,get:v24};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v31 = Object.defineProperty(v19,2794983832,v29);
// v31 = .undefined
const v32 = {defineProperty:v24,setPrototypeOf:gc,isExtensible:gc,getOwnPropertyDescriptor:v24,deleteProperty:Object,set:v24};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "getOwnPropertyDescriptor", "isExtensible", "set", "defineProperty"])
const v34 = new Proxy(v18,v32);
// v34 = .unknown
const v35 = v23 + 1;
// v35 = .primitive
let v36 = 1337;
const v39 = [13.37,13.37,13.37,13.37,13.37];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v41 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v41 = .object(ofGroup: Object, withProperties: ["b", "d", "toString", "e", "__proto__"])
let v42 = v39;
v41[v42] = 13.37;
const v51 = {constructor:v19,__proto__:13.37,...v17,...v36};
// v51 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"], withMethods: ["pop", "toLocaleString", "reduce", "toString", "map", "slice", "includes", "forEach", "keys", "push", "entries", "filter", "every", "reduceRight", "concat", "lastIndexOf", "flat", "some", "splice", "indexOf", "fill", "flatMap", "find", "findIndex", "unshift", "reverse", "join", "sort", "shift", "values", "copyWithin"])
const v52 = {defineProperty:Object,ownKeys:gc,get:v24,has:v24,isExtensible:Object};
// v52 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "has", "get", "isExtensible", "ownKeys"])
const v54 = new Proxy(v18,v52);
// v54 = .unknown
const v55 = gc();
// v55 = .undefined
}
%NeverOptimizeFunction(main);
main();
