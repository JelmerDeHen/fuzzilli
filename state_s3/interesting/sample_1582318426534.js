function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {valueOf:"symbol"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v9 = {e:13.37,c:v8,length:-3577749417,valueOf:1337,d:v7,__proto__:-3577749417,toString:Promise};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "toString", "length", "__proto__", "c", "e"])
let v10 = 13.37;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v13(v14,v15,v16,v17) {
    'use strict'
    return v16;
}
function v19(v20,v21,v22) {
    return v12;
}
let v23 = this;
let v24 = v23;
const v27 = new Proxy(v24,Object);
// v27 = .unknown
v27.constructor = v12;
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
const v33 = Symbol.species;
// v33 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v27[v33] = v13;
let v35 = undefined;
v23[-154160656] = undefined;
v35 = 0;
this.e = 13.37;
c = 13.37;
const v44 = {get:v19};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v46 = Object.defineProperty(v24,"a",v44);
// v46 = .undefined
valueOf = 3;
d = 1337;
}
%NeverOptimizeFunction(main);
main();
