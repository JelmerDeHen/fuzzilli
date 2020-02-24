function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    const v6 = {a:v4,preventExtensions:v4,defineProperty:v2,getPrototypeOf:v4,deleteProperty:v4,has:v2,set:v3,apply:v4};
    // v6 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "getPrototypeOf", "a", "set", "deleteProperty", "preventExtensions"], withMethods: ["defineProperty", "has"])
    const v8 = new Proxy(v2,v6);
    // v8 = .unknown
    const v9 = {__proto__:0,...Proxy,...v2,...v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
const v10 = v2();
// v10 = .unknown
const v13 = [1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = v13.reduceRight(v2);
// v14 = .unknown
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
}
%NeverOptimizeFunction(main);
main();
