function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,"symbol"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {toString:"symbol",d:v7,c:WeakSet,b:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "c", "__proto__", "d", "toString"])
const v9 = {valueOf:WeakSet,e:WeakSet,d:WeakSet,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e"])
let v10 = "symbol";
function v14(v15,v16) {
    let v23 = 1;
    const v25 = 8 << 1;
    // v25 = .integer
    let v28 = 0;
    do {
        const v30 = v28 + 1;
        // v30 = .primitive
        v28 = v30;
    } while (v28 < 4);
    let v32 = 0;
    const v33 = v32 + 1;
    // v33 = .primitive
    v32 = v33;
    let v38 = 0;
    const v39 = 10 + 1;
    // v39 = .primitive
    v23 = v39;
    return 7;
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v41 = v40;
let v42 = v9;
v8.b = v40;
for (const v44 in v6) {
    const v45 = gc();
    // v45 = .undefined
}
for (let v49 = 0; v49 < 100; v49++) {
    const v50 = isFinite(1337);
    // v50 = .boolean
}
const v51 = v14(v41);
// v51 = .unknown
const v52 = {isExtensible:v51,defineProperty:isFinite,deleteProperty:v51,call:v14,has:v14,set:v14};
// v52 = .object(ofGroup: Object, withProperties: ["deleteProperty", "isExtensible", "__proto__"], withMethods: ["has", "set", "defineProperty", "call"])
const v54 = new Proxy(Float32Array,v52);
// v54 = .unknown
const v55 = v54.__proto__;
// v55 = .unknown
}
%NeverOptimizeFunction(main);
main();
