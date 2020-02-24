function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = ["matchAll",v3];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {e:v5,c:WeakSet,length:v3,toString:v6,__proto__:"matchAll",d:v6,a:v6};
// v7 = .object(ofGroup: Object, withProperties: ["a", "c", "d", "length", "e", "__proto__", "toString"])
const v8 = {e:v7,constructor:v5,c:13.37,valueOf:13.37,__proto__:v5,d:"matchAll",a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["a", "d", "valueOf", "c", "__proto__", "constructor", "e"])
let v12 = 0;
try {
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    const v23 = {get:"symbol"};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v25 = Object.defineProperty(v8,"valueOf",v23);
    // v25 = .undefined
    let v30 = 0;
} catch(v31) {
}
const v32 = v12 + 1;
// v32 = .primitive
v12 = v32;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
}
%NeverOptimizeFunction(main);
main();
