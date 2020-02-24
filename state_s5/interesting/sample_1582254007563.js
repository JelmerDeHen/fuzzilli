function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {d:"function",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["e", "d", "c", "__proto__", "toString"])
const v9 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:Symbol};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "d", "e"], withMethods: ["valueOf"])
let v10 = v8;
const v26 = Object();
// v26 = .object()
let v27 = 0;
const v32 = {};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v33 = [v32,v32,v32,v32];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = 0;
let v39 = 0;
do {
    if (v7) {
    } else {
        try {
        } catch(v41) {
        }
    }
    const v43 = v39 + 1;
    // v43 = .primitive
    v39 = v43;
} while (v39 < 10);
const v44 = v36 + 1;
// v44 = .primitive
v36 = v44;
}
%NeverOptimizeFunction(main);
main();
