function main() {
function v1(v2,v3) {
    const v9 = [13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = [1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v12 = [1337,1337,v11];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v13 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v11,constructor:"eTm8XK*Max"};
    // v13 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "length", "e", "a"])
    const v14 = {__proto__:v11,toString:"eTm8XK*Max",e:v13,b:v12,a:v12,constructor:13.37};
    // v14 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a", "constructor", "e", "toString"])
    for (let v18 = 0; v18 < 100; v18++) {
        const v20 = [13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v23(v24,v25) {
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v30 = 1337 >= 0;
            // v30 = .boolean
            const v31 = v20[0];
            // v31 = .unknown
            const v33 = Symbol.toStringTag;
            // v33 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v20[v33] = v30;
            const v35 = Object();
            // v35 = .object()
        }
        const v38 = [1337];
        // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v39 = v38;
        const v40 = v23(v39);
        // v40 = .unknown
        const v41 = v23(1024,4.0);
        // v41 = .unknown
    }
    const v43 = Symbol.replace;
    // v43 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v44 = v9[v43];
    // v44 = .unknown
    const v45 = v44 === v14;
    // v45 = .boolean
    let v49 = 0;
    const v50 = v49 + 1;
    // v50 = .primitive
    v49 = v50;
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v54 = v53;
const v55 = v1(v54);
// v55 = .unknown
const v56 = v1(1024,4.0);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
