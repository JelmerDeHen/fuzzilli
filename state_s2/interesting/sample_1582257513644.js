function main() {
function v1(v2,v3) {
    let v6 = 0;
    let v9 = 0;
    for (let v16 = 0; v16 < 100; v16++) {
    }
    const v17 = v9 + 1;
    // v17 = .primitive
    v9 = v17;
    const v18 = v6 + 1;
    // v18 = .primitive
    v6 = v18;
    const v22 = {length:"N0Xx92zvHQ"};
    // v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v23 = {constructor:13.37,length:13.37,__proto__:v22,toString:Number,a:"N0Xx92zvHQ"};
    // v23 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
    let v24 = v23;
    for (const v26 in "object") {
        const v28 = Symbol.match;
        // v28 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v24[v28] = v26;
    }
    const v34 = Object();
    // v34 = .object()
    let v37 = 0;
    const v38 = v37 + 1;
    // v38 = .primitive
    v37 = v38;
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v42 = v41;
const v43 = v1(v42);
// v43 = .unknown
const v44 = v1(1024,4.0);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
