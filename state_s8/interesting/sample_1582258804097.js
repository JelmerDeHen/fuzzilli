function main() {
function v0(v1,v2) {
    const v5 = [13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v7 = [1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v8 = [1337,1337,v7];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v9 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v7,constructor:"eTm8XK*Max"};
    // v9 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "length", "constructor", "d"])
    const v10 = {__proto__:v7,toString:"eTm8XK*Max",e:v9,b:v8,a:v8,constructor:13.37};
    // v10 = .object(ofGroup: Object, withProperties: ["e", "a", "b", "constructor", "__proto__", "toString"])
    for (let v14 = 0; v14 < 100; v14++) {
        const v16 = [13.37,13.37,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v19(v20,v21) {
            const v23 = 13.37 + 1;
            // v23 = .primitive
            const v24 = 1337 >= 0;
            // v24 = .boolean
            const v25 = v16[0];
            // v25 = .unknown
            const v27 = Symbol.toStringTag;
            // v27 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v16[v27] = v24;
            const v29 = Object();
            // v29 = .object()
        }
        const v32 = [1337];
        // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v33 = v32;
        const v34 = v19(v33);
        // v34 = .unknown
        const v35 = v19(1024,4.0);
        // v35 = .unknown
    }
    const v38 = {b:2147483647};
    // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v38.length = 1337;
    const v40 = Symbol.replace;
    // v40 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v41 = v5[v40];
    // v41 = .unknown
    const v42 = v41 === v10;
    // v42 = .boolean
    let v44 = 0;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v47 = v46;
const v48 = v0(v47);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
