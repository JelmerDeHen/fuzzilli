function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {b:v6,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "b", "e", "__proto__", "c"])
const v9 = {c:v7,constructor:Math,valueOf:v8,b:1337,e:v4,a:13.37,length:v4};
// v9 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "valueOf", "e", "length", "b", "__proto__"])
let v10 = v6;
const v14 = [1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = [1337,1337,v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v14,constructor:"eTm8XK*Max"};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "d", "a", "e"])
const v17 = {__proto__:v14,toString:"eTm8XK*Max",e:v16,b:v15,a:v15,constructor:13.37};
// v17 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "a", "b", "constructor"])
function v18(v19,v20) {
    for (const v21 in v17) {
        const v27 = [13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v29 = [13.37,v27];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v30 = Object("symbol",v29);
        // v30 = .object()
        let v31 = 0;
        do {
            for (const v32 of v30) {
            }
            const v33 = v31 + 1;
            // v33 = .primitive
            v31 = v33;
        } while (v31 < 8);
    }
    return v20;
}
let v34 = v14;
const v35 = v18(v34);
// v35 = .unknown
const v36 = v4.values();
// v36 = .object()
const v37 = v18();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
