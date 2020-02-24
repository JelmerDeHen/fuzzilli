function main() {
let v3 = 0;
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = ["matchAll",v6];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {e:v8,c:WeakSet,length:v6,toString:v9,__proto__:"matchAll",d:v9,a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "toString", "d", "e", "c"])
const v11 = {e:v10,constructor:v8,c:13.37,valueOf:13.37,__proto__:v8,d:"matchAll",a:v10};
// v11 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "c", "__proto__", "e", "d", "a"])
let v12 = v10;
const v13 = [];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v16 = 0;
do {
    const v17 = v16 + 1;
    // v17 = .primitive
    function v18(v19,v20) {
        const v25 = v18 <= 10;
        // v25 = .boolean
        let v31 = 0;
        const v36 = v31 + 1;
        // v36 = .primitive
        v31 = v36;
    }
    let v40 = 0;
    const v41 = [1337];
    // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v42 = v41;
    const v43 = v18(v42);
    // v43 = .unknown
    v16 = v17;
} while (v16 < 7);
}
%NeverOptimizeFunction(main);
main();
