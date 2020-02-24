function main() {
let v1 = 1337;
let v3 = undefined;
let v6 = -128;
do {
    const v9 = [13.37,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v11 = [1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v12 = v9.constructor;
    // v12 = .object(ofGroup: Function, withProperties: ["constructor", "length", "arguments", "__proto__", "name", "prototype", "caller"], withMethods: ["apply", "bind", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"]))
    const v14 = {set:v12,get:v12};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v16 = Object.defineProperty(v11,268435456,v14);
    // v16 = .undefined
    const v18 = Object.freeze(v11);
    // v18 = .undefined
    const v19 = v6 + 1;
    // v19 = .primitive
    v6 = v19;
} while (v6 < -2);
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v26 = {b:v25,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v26 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "valueOf", "e", "length"])
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
let v34 = 0;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
}
%NeverOptimizeFunction(main);
main();
