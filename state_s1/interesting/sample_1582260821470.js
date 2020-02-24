function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v21 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v20,b:"__proto__"};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "toString", "a", "b"], withMethods: ["__proto__", "valueOf"])
const v24 = [];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v25 = {__proto__:"eeeRbEqfAO",constructor:65537,length:v24};
// v25 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
const v29 = {constructor:13.37,length:13.37,__proto__:v21,toString:Number,a:"constructor"};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
const v30 = 13.37 != v25;
// v30 = .boolean
for (const v31 in v29) {
}
}
%NeverOptimizeFunction(main);
main();
