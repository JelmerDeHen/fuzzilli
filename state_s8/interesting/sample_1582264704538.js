function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1598087699,v4,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:v6};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = {valueOf:DataView,c:v6,d:DataView,a:1337,length:"undefined",toString:1337,b:1598087699};
// v9 = .object(ofGroup: Object, withProperties: ["c", "a", "valueOf", "toString", "d", "b", "__proto__", "length"])
let v10 = v9;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v13 = v12;
let v15 = undefined;
let v25 = 10;
const v29 = [13.37,13.37];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v33 = 0;
do {
    const v34 = gc();
    // v34 = .undefined
    const v35 = v33 + 1;
    // v35 = .primitive
    v33 = v35;
    let v39 = 0;
    const v40 = v39 + 1;
    // v40 = .primitive
    v39 = v40;
    delete (8)[v35];
    const v41 = Function == v35;
    // v41 = .boolean
    const v42 = (100)[8];
    // v42 = .unknown
    let v44 = 0;
    const v45 = 13.37 - 1;
    // v45 = .primitive
    const v46 = v44 + 1;
    // v46 = .primitive
    v44 = v46;
    const v48 = Symbol.species;
    // v48 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Symbol[v48] = 13.37;
} while (v33 < 10);
const v49 = [13.37,v29];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v50 = Function("symbol",v49);
// v50 = .unknown
let v51 = 0;
let v57 = 0;
let v60 = 0;
let v61 = 0;
const v66 = v51 + 1;
// v66 = .primitive
v51 = v66;
}
%NeverOptimizeFunction(main);
main();
