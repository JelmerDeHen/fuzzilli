function main() {
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {length:Uint32Array,b:Uint32Array,__proto__:-837774637,d:"MAX_SAFE_INTEGER",valueOf:13.37,a:-837774637};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "length", "b", "__proto__", "a"])
const v7 = {__proto__:"MAX_SAFE_INTEGER",b:1337,c:v6,toString:v5,valueOf:v6,a:v5};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "c", "valueOf", "b", "__proto__", "a"])
let v9 = 13.37;
const v11 = [13.37,v7];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = {b:v11};
// v12 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v17 = [2,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = [NaN,13.37,2];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v19 = v17;
const v21 = {get:NaN};
// v21 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v23 = Object.seal(v18,1337,v21);
// v23 = .object()
const v25 = v18.indexOf(v9,v19,v18,"name",v12);
// v25 = .integer
}
%NeverOptimizeFunction(main);
main();
