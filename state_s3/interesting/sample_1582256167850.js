function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v14 = "symbol";
const v15 = {isExtensible:Array,ownKeys:v14};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["isExtensible"])
const v17 = new Proxy(gc,v15);
// v17 = .unknown
const v18 = [];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = {valueOf:v18,length:13.37,d:127,e:127};
// v19 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d", "valueOf", "length"])
const v20 = {c:v18,valueOf:v19,d:Array,a:1337};
// v20 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "a"], withMethods: ["d"])
const v23 = v4 != v20;
// v23 = .boolean
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v31 = [];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v32 = {valueOf:v31,length:13.37,d:127,e:127};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "e", "length"])
const v33 = {c:v31,valueOf:v32,d:Array,a:1337};
// v33 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "a"], withMethods: ["d"])
const v34 = Reflect.set(v33,v17);
// v34 = .boolean
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
let v43 = 0;
}
%NeverOptimizeFunction(main);
main();
