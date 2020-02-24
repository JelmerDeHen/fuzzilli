function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {e:Uint16Array,length:1000,valueOf:"Tf1a2HPzId",constructor:"Tf1a2HPzId",b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "b", "valueOf", "__proto__", "e", "length"])
let v6 = v5;
const v8 = [13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = {b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v14 = [-2168157998,v6];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [Reflect,13.37,2];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v16 = v14;
const v18 = {get:Reflect};
// v18 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v20 = Object.seal(v15,65537,v18);
// v20 = .object()
const v21 = Object.freeze(v20);
// v21 = .undefined
const v23 = v15.includes(v8,v16,v15,"name",v9);
// v23 = .boolean
}
%NeverOptimizeFunction(main);
main();
