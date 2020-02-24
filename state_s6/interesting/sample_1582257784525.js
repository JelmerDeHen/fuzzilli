function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v4,constructor:"eTm8XK*Max"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "e", "constructor", "d", "__proto__", "a"])
const v7 = {__proto__:v4,toString:"eTm8XK*Max",e:v6,b:v5,a:v5,constructor:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["b", "toString", "constructor", "__proto__", "a", "e"])
for (let v11 = 0; v11 < 100; v11++) {
    const v13 = [13.37,13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    function v16(v17,v18) {
        let v26 = 0;
        const v28 = v26 + 1;
        // v28 = .primitive
        v26 = v28;
        const v29 = 1337 >= 0;
        // v29 = .boolean
        const v30 = v13[0];
        // v30 = .unknown
        const v32 = Symbol.toStringTag;
        // v32 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v13[v32] = v29;
        const v35 = 1337 == 13.37;
        // v35 = .boolean
        const v37 = Object();
        // v37 = .object()
    }
    const v40 = [1337];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v41 = v40;
    const v42 = v16(v41);
    // v42 = .unknown
    const v43 = v16(1024,4.0);
    // v43 = .unknown
}
const v45 = Symbol.replace;
// v45 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v46 = v2[v45];
// v46 = .unknown
const v47 = v46 === v7;
// v47 = .boolean
}
%NeverOptimizeFunction(main);
main();
