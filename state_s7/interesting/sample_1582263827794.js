function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {constructor:Uint16Array,b:v6,c:v7,length:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length", "b", "constructor"])
const v9 = {length:Uint16Array,d:Uint16Array,constructor:v7,b:v4,toString:v7,__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "toString", "constructor", "length"])
let v10 = v7;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v21 = 0;
            const v22 = v21 + 1;
            // v22 = .primitive
            v21 = v22;
            const v28 = [1337];
            // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v29 = {b:v28,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
            // v29 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length", "e", "a"])
            const v30 = v28.concat(v29,"iterator",Uint16Array,4294967297);
            // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v31 = v30.__proto__;
            // v31 = .object()
            let v40 = 0;
            const v41 = v40 + 1;
            // v41 = .primitive
            v40 = v41;
            let v44 = v31;
            const v45 = v44 + 1;
            // v45 = .primitive
            v44 = v45;
            const v46 = v30.filter(gc);
            // v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v47 = v18 + 1;
            // v47 = .primitive
            v18 = v47;
        } while (v18 < 8);
    }
    return "unscopable";
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v50 = v49;
const v51 = v11(v50);
// v51 = .unknown
const v53 = Symbol.isConcatSpreadable;
// v53 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v54 = v50[v53];
// v54 = .unknown
const v55 = v50[1000];
// v55 = .unknown
v4[1337] = v49;
const v56 = v11(Symbol,Symbol);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
