function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {e:1337,__proto__:v3,length:-3818880063,a:v5,constructor:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length", "e"])
function v8(v9,v10) {
    let v15 = 0;
}
const v16 = {setPrototypeOf:v8,getOwnPropertyDescriptor:v8,apply:v8};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "apply"])
const v18 = new Proxy(v6,v16);
// v18 = .unknown
const v19 = "size" < "size";
// v19 = .boolean
const v20 = v18.concat();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
