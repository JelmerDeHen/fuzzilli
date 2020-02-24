function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37,v4,-2,Float32Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {__proto__:"hasInstance",d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v9 = {__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v9;
function v35(v36,v37,v38,v39,v40) {
    'use strict'
    let v41 = v40;
    return Reflect;
}
const v43 = {get:v35,set:v35};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v45 = Object.defineProperty(v10,"__proto__",v43);
// v45 = .undefined
const v46 = Reflect.POSITIVE_INFINITY;
// v46 = .unknown
v43[1024] = 13.37;
let v92 = 0;
const v93 = v92 + 1;
// v93 = .primitive
v92 = v93;
const v109 = typeof DataView;
// v109 = .string
const v111 = v109 === "boolean";
// v111 = .boolean
let v141 = 0;
const v145 = v141 + 1;
// v145 = .primitive
v141 = v145;
for (let v149 = 0; v149 < 100; v149++) {
}
let v179 = 0;
let v182 = 0;
const v183 = v182 + 1;
// v183 = .primitive
v182 = v183;
const v184 = v179 + 1;
// v184 = .primitive
v179 = v184;
const v199 = [13.37,966929983,13.37,13.37,13.37];
// v199 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v200 = new Uint16Array(v199);
// v200 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
const v201 = [];
// v201 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v202 = {valueOf:v201,length:13.37,d:127,e:127};
// v202 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d", "e", "valueOf"])
const v203 = {c:v201,valueOf:v202,d:Array,a:1337};
// v203 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "a"], withMethods: ["d"])
length = v203;
const v204 = DataView in Object;
// v204 = .boolean
const v205 = gc();
// v205 = .undefined
}
%NeverOptimizeFunction(main);
main();
