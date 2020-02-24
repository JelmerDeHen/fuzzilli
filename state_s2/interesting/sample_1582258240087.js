function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6,1337,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v9 = {a:-4294967295,e:13.37,__proto__:"dVmqACI+Vs",length:v4,b:-4294967295};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "length", "a"])
let v10 = "dVmqACI+Vs";
const v24 = v7.some(Boolean,v9);
// v24 = .boolean
v9[5] = 1;
v7[0] = "object";
for (let v28 = 0; v28 < 2; v28++) {
    delete v8.__proto__;
}
const v31 = [];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v36 = [13.37];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v37 = v4.includes(v8,1);
// v37 = .boolean
const v38 = v36.__proto__;
// v38 = .object()
const v39 = {d:gc,...1337,...v37};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["d"])
let v40 = 0;
const v42 = {set:gc};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
}
%NeverOptimizeFunction(main);
main();
