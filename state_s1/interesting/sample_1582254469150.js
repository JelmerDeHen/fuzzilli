function main() {
const v5 = {length:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,toString:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
const v9 = {set:Number};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v11 = Object.defineProperty(v5,"valueOf",v9);
// v11 = .undefined
const v13 = {c:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v24 = [13.37,13.37,13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v26 = [1337,1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v27 = [1337,v24,13.37,1024];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v28 = {length:"N0Xx92zvHQ"};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v29 = {constructor:13.37,length:13.37,__proto__:v28,toString:Number,a:"N0Xx92zvHQ"};
// v29 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
let v30 = v29;
const v33 = [13.37,13.37,13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v35 = [1337,v33,13.37,1024];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v37 = Symbol.search;
// v37 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v38 = v35[v37];
// v38 = .unknown
const v40 = this.PI;
// v40 = .unknown
Number.__proto__ = v30;
const v41 = "N0Xx92zvHQ"[546454967];
// v41 = .unknown
const v42 = 13.37 === v40;
// v42 = .boolean
let v43 = v24;
if (v40) {
    v37.e = 13.37;
    v43 = 13.37;
} else {
    const v44 = Number(...v43,v41);
    // v44 = .number
    v43 = v44;
}
v37[546454967] = v35;
const v46 = gc instanceof gc;
// v46 = .boolean
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
}
%NeverOptimizeFunction(main);
main();
