function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v4 = v3;
let v6 = undefined;
const v12 = [3156875969,3156875969,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = {constructor:v12,c:v12,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
// v13 = .object(ofGroup: Object, withProperties: ["c", "d", "a", "constructor", "e", "__proto__"])
const v14 = v13.__proto__;
// v14 = .object()
let v21 = 0;
const v22 = Boolean === v4;
// v22 = .boolean
let v25 = 0;
const v31 = {set:parseInt};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v33 = Object.defineProperty(v14,"__proto__",v31);
// v33 = .undefined
const v39 = v21 + 1;
// v39 = .primitive
v21 = v39;
}
%NeverOptimizeFunction(main);
main();
