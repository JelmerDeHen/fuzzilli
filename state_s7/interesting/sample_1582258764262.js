function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {b:v6,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "b", "e", "constructor"])
const v9 = {c:v7,constructor:Math,valueOf:v8,b:1337,e:v4,a:13.37,length:v4};
// v9 = .object(ofGroup: Object, withProperties: ["c", "length", "e", "__proto__", "b", "valueOf", "constructor", "a"])
let v10 = v6;
let v14 = 0;
const v15 = 13.37 + 1;
// v15 = .primitive
v14 = v15;
function v16(v17,v18) {
    for (const v20 in "8EfV0UAUvo") {
        const v21 = "species" === v20;
        // v21 = .boolean
        let v24 = 0;
        do {
            for (let v28 = 0; v28 < 4; v28++) {
            }
            const v29 = v24 + 1;
            // v29 = .primitive
            v24 = v29;
        } while (v24 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v32 = v31;
const v33 = v16(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
