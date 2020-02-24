function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {toString:v4,b:"PI",valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "b"])
const v9 = {b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v10 = v8;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = [v15,v17,v17];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = {d:"undefined",e:v15,__proto__:v17,c:v17,toString:v18};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "c", "e", "d", "__proto__"])
const v20 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "e", "d", "constructor"])
let v21 = v19;
const v25 = [273493.0424389518,273493.0424389518,273493.0424389518];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v28 = {has:gc,call:gc};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v30 = new Proxy(gc,v28);
// v30 = .unknown
v28.__proto__ = Proxy;
v30.constructor = 0;
const v33 = [1337,1337,1337,1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v34 = {c:13.37};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v35 = {d:gc,valueOf:v33};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
Object[v35] = v34;
const v38 = [1337,1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v43 = [1337,1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v44 = {b:13.37,d:1607264097,e:1607264097,constructor:v43,valueOf:WeakSet};
// v44 = .object(ofGroup: Object, withProperties: ["d", "constructor", "b", "valueOf", "e", "__proto__"])
for (const v46 in v44) {
    const v47 = gc();
    // v47 = .undefined
}
const v57 = (1337)[WeakSet];
// v57 = .unknown
let v60 = 0;
while (v60 < 10) {
    let v61 = WeakSet;
    const v62 = v60 + 1;
    // v62 = .primitive
    v60 = v62;
}
const v64 = Symbol.species;
// v64 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v65 = Symbol[v64];
// v65 = .unknown
const v66 = Symbol(v65);
// v66 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
