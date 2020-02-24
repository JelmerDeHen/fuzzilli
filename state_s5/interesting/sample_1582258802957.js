function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v3 = v2;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v11 = 13.37;
const v14 = [13.37,13.37,13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v14[1337] = "byteLength";
let v18 = 0;
let v21 = 0;
const v24 = {setPrototypeOf:Object,set:v11,get:Object};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "set"], withMethods: ["get", "setPrototypeOf"])
const v26 = new Proxy(Uint16Array,v24);
// v26 = .unknown
const v27 = v14.shift();
// v27 = .unknown
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
}
%NeverOptimizeFunction(main);
main();
