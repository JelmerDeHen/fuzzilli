function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v19 = {valueOf:v18,length:13.37,d:127,e:127};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "d", "e"])
const v20 = {c:v18,valueOf:v19,d:Array,a:1337};
// v20 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "valueOf"], withMethods: ["d"])
const v23 = v4 != v20;
// v23 = .boolean
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v31 = [];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v32 = {valueOf:v31,length:13.37,d:127,e:127};
// v32 = .object(ofGroup: Object, withProperties: ["length", "e", "d", "valueOf", "__proto__"])
const v33 = {c:v31,valueOf:v32,d:Array,a:1337};
// v33 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__"], withMethods: ["d"])
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
