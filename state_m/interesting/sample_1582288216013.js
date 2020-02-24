function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [this,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {toString:v6,length:v7,b:"string",__proto__:v7,e:1153355759,c:1153355759};
// v8 = .object(ofGroup: Object, withProperties: ["b", "e", "toString", "c", "length", "__proto__"])
function v9(v10,v11) {
    let v15 = 0;
    while (v15 < 1337) {
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
    }
    const v17 = new Promise(Promise);
    // v17 = .object()
    const v20 = {e:v8,d:8,b:13.37,a:v17,length:v7};
    // v20 = .object(ofGroup: Object, withProperties: ["b", "a", "d", "length", "e", "__proto__"])
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    let v30 = 0;
    let v33 = 0;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v36 = v35;
const v37 = v9(v36);
// v37 = .unknown
const v38 = v9(v35,v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
