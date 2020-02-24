function main() {
let v2 = 0;
function v3(v4,v5,v6,v7) {
    'use strict'
}
function v9(v10,v11,v12) {
}
let v13 = this;
let v14 = v13;
const v17 = new Proxy(v14,Object);
// v17 = .unknown
const v19 = Symbol.species;
// v19 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v17[v19] = v3;
this.e = 13.37;
const v24 = [1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v25 = {toString:v24,c:1337,__proto__:v24};
// v25 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__"])
let v26 = this;
const v31 = {get:v9};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v33 = Object.defineProperty(v14,"a",v31);
// v33 = .undefined
valueOf = 3;
d = 1337;
const v38 = {d:-2147483647,__proto__:"object",constructor:-9007199254740992,valueOf:eval,...13.37,...1,...v26,...1,...v25};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "constructor", "toString", "e"], withMethods: ["valueOf"])
}
%NeverOptimizeFunction(main);
main();
