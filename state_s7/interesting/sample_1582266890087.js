function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
for (let v6 = 0; v6 < 100; v6++) {
    const v8 = [13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v11(v12,v13) {
        const v15 = [-2147483647];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        v15[65535] = Number;
        let v19 = 0;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v21 = 1337 >= 0;
        // v21 = .boolean
        const v22 = v8[0];
        // v22 = .unknown
        const v24 = Symbol.toStringTag;
        // v24 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        v8[v24] = v21;
        const v27 = 1337 == 13.37;
        // v27 = .boolean
        v8[v6] = "eTm8XK*Max";
        const v28 = (1024)[v2];
        // v28 = .unknown
        const v29 = v6[Symbol];
        // v29 = .unknown
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    try {
        const v36 = Uint32Array(907);
        // v36 = .unknown
        const v38 = {get:undefined};
        // v38 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
        const v40 = Object.defineProperty(v36,10000,v38);
        // v40 = .undefined
    } catch(v41) {
    }
    let v42 = v32;
    const v43 = v11(v42);
    // v43 = .unknown
    const v44 = v11(1024,4.0);
    // v44 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
