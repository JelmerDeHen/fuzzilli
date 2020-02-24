function main() {
let v2 = 0;
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    const v15 = {length:v4};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"], withMethods: ["toString"])
    let v17 = v16;
    const v19 = Number[1024];
    // v19 = .unknown
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    for (let v29 = 0; v29 < 100; v29++) {
    }
    let v31 = 0;
    do {
        const v32 = v31 + 1;
        // v32 = .primitive
        for (let v36 = 0; v36 < 3; v36++) {
            for (const v38 in "object") {
            }
        }
        v31 = v32;
    } while (v31 < 3);
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v41 = v40;
const v42 = v6(v41);
// v42 = .unknown
const v43 = v6();
// v43 = .unknown
const v44 = v6(1337,Reflect);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
