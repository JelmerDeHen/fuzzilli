function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {e:v4,b:1337,valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "e"])
const v9 = {b:13.37,d:v6,__proto__:v8,e:v7,valueOf:"number"};
// v9 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "b", "e", "__proto__"])
let v10 = v6;
with ("number") {
    __proto__ = 65536;
    for (let v16 = 0; v16 < 8; v16++) {
    }
}
let v18 = 0;
const v20 = [13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v24 = v4(DataView);
    // v24 = .unknown
    const v28 = v24[13.37];
    // v28 = .unknown
    v24.__proto__ = v28;
    const v30 = v24.isConcatSpreadable;
    // v30 = .unknown
    const v31 = Symbol[v30];
    // v31 = .unknown
    const v32 = 1337 & 1337;
    // v32 = .integer
    const v33 = v31.buffer;
    // v33 = .unknown
    const v34 = v24.slice(1024,1337);
    // v34 = .unknown
    let v35 = 1337;
    const v36 = DataView(v34,127,v35);
    // v36 = .unknown
} catch(v37) {
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v40(v41,v42,v43,v44) {
    'use strict'
}
function v46(v47,v48,v49) {
}
let v50 = this;
let v51 = v50;
const v54 = new Proxy(v51,Object);
// v54 = .unknown
v54.constructor = v39;
let v57 = 0;
const v58 = v57 + 1;
// v58 = .primitive
v57 = v58;
const v60 = Symbol.species;
// v60 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v54[v60] = v40;
let v62 = undefined;
v50[-154160656] = undefined;
v62 = 0;
this.e = 13.37;
c = 13.37;
const v70 = {get:v46};
// v70 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v72 = Object.defineProperty(v51,"a",v70);
// v72 = .undefined
valueOf = 3;
d = 1337;
}
%NeverOptimizeFunction(main);
main();
