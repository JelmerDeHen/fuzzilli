function main() {
function v2(v3,v4) {
    let v7 = 0;
    let v10 = 0;
    const v17 = v10 + 1;
    // v17 = .primitive
    v10 = v17;
    const v18 = v7 + 1;
    // v18 = .primitive
    v7 = v18;
    const v25 = [13.37,13.37,13.37,13.37,13.37];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v28 = [v25,v27,Uint16Array];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v31 = 0;
    const v32 = gc();
    // v32 = .undefined
    const v34 = Object();
    // v34 = .object()
    const v36 = [13.37,13.37,13.37,13.37,13.37];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v37 = v36;
    for (let v41 = 0; v41 < 100; v41++) {
        const v48 = [1337];
        // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v49 = {b:v48,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
        // v49 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "e", "valueOf", "a"])
        const v52 = Symbol.unscopables;
        // v52 = .unknown
        v49[v52] = 0;
        let v54 = 0;
        const v55 = {...v49,...0,...v54};
        // v55 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__", "a", "e"])
    }
    let v58 = 0;
    const v59 = v58 + 1;
    // v59 = .primitive
    v58 = v59;
}
const v62 = [1337];
// v62 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v63 = v62;
const v64 = v2(v63);
// v64 = .unknown
const v65 = v2(1024,4.0);
// v65 = .unknown
}
%NeverOptimizeFunction(main);
main();
