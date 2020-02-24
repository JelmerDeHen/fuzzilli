function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [1337,9007199254740993,parseInt,9007199254740993];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {length:9007199254740993,constructor:"MAX_VALUE",e:v6,c:v4,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "b", "c", "length"])
const v9 = {d:v7,toString:9007199254740993,e:v4,c:"MAX_VALUE",length:v4};
// v9 = .object(ofGroup: Object, withProperties: ["length", "c", "toString", "__proto__", "d", "e"])
let v10 = v9;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v13(v14,v15,v16,v17) {
    'use strict'
    return v15;
}
function v19(v20,v21,v22) {
    return v6;
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
const v43 = {get:v19};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v45 = Object.defineProperty(v24,"a",v43);
// v45 = .undefined
valueOf = 3;
d = 1337;
}
%NeverOptimizeFunction(main);
main();
