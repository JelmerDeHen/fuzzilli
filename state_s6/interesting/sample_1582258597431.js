function main() {
let v2 = 0;
const v6 = [13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = ["MAX_VALUE",v6];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {b:"MAX_VALUE",length:v8,c:v9};
// v10 = .object(ofGroup: Object, withProperties: ["c", "b", "__proto__", "length"])
const v11 = {constructor:v6,c:13.37,d:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["c", "constructor", "d", "__proto__"])
let v12 = v10;
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = {b:"split",__proto__:v15,constructor:1337};
// v18 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__"])
function v19(v20,v21) {
    for (let v25 = 0; v25 < 100; v25++) {
    }
    const v27 = v17.map(Number,v18);
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
}
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v19();
    // v32 = .unknown
}
let v33 = v11;
try {
    for (const v34 in v33) {
        const v36 = {get:v19};
        // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v38 = Object.defineProperty(v9,"d",v36);
        // v38 = .undefined
    }
    v33 = 0;
} catch(v39) {
    const v40 = v39.getFloat64();
    // v40 = .unknown
    v33 = v40;
}
const v41 = v15.__proto__;
// v41 = .object()
const v42 = v8[0];
// v42 = .unknown
const v43 = v19(Map,1337);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
