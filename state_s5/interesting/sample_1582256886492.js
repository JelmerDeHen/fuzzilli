function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = ["matchAll",v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {e:v5,c:WeakSet,length:v3,toString:v6,__proto__:"matchAll",d:v6,a:v6};
// v7 = .object(ofGroup: Object, withProperties: ["d", "c", "length", "toString", "a", "__proto__", "e"])
const v8 = {e:v7,constructor:v5,c:13.37,valueOf:13.37,__proto__:v5,d:"matchAll",a:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "__proto__", "d", "e", "valueOf"])
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
    // v23 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
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
