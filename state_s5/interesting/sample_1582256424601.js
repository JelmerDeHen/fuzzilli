function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:v4,valueOf:Object,a:v6,e:v7};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "e", "constructor"], withMethods: ["valueOf"])
const v9 = v8[-2523524113];
// v9 = .unknown
const v11 = {set:v9};
// v11 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
const v13 = Object.defineProperty(v8,1337,v11);
// v13 = .undefined
const v14 = 1337 << Object;
// v14 = .integer
const v15 = Object(v4,Object,v13,2431042580,v8);
// v15 = .object()
let v16 = v4;
try {
    const v17 = Object(Object,v4,1337);
    // v17 = .object()
    v16 = v17;
} catch(v18) {
    const v19 = v4.fill(v18,2431042580,1337);
    // v19 = .undefined
    v16 = v19;
}
let v38 = 0;
const v44 = v38 + 1;
// v44 = .primitive
v38 = v44;
}
%NeverOptimizeFunction(main);
main();
