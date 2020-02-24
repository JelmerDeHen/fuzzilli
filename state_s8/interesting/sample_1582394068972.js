function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [v4,13.37,v4,2485132437];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {valueOf:1337,length:Uint8Array};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
const v7 = {preventExtensions:v5,get:v4,getPrototypeOf:Uint8Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "preventExtensions", "getPrototypeOf"])
const v9 = new Proxy(Uint8Array,v7);
// v9 = .unknown
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = {valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v17 = [2,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = [Uint8ClampedArray,13.37,2];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v19 = v17;
v18.length = 1337;
const v21 = {get:Uint8ClampedArray};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v23 = Object.freeze(v18,65537,v21);
// v23 = .undefined
const v25 = v18.includes(v6,v19,v18,"Ol*2*xBE*6",v12);
// v25 = .boolean
}
%NeverOptimizeFunction(main);
main();
