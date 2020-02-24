function main() {
function v0(v1,v2,v3,v4) {
    'use strict'
}
function v6(v7,v8,v9) {
    let v12 = 0;
}
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
let v20 = this;
let v21 = v20;
const v24 = new Proxy(v21,Object);
// v24 = .unknown
const v26 = Symbol.species;
// v26 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v24[v26] = v0;
this.e = 13.37;
c = 13.37;
const v31 = [1337,1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v32 = {toString:v31,c:1337,__proto__:v31};
// v32 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__"])
let v33 = this;
const v41 = {get:v6};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v43 = Object.defineProperty(v21,"a",v41);
// v43 = .undefined
valueOf = 3;
d = 1337;
const v48 = {d:-2147483647,__proto__:"object",constructor:-9007199254740992,valueOf:eval,...13.37,...1,...v33,...1,...v32};
// v48 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "d", "c", "toString"], withMethods: ["valueOf"])
}
%NeverOptimizeFunction(main);
main();
