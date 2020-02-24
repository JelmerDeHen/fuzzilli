function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [Float64Array,-1773153690,1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {a:v6,valueOf:v4,c:Float64Array,length:"g3lWuYSlmh",__proto__:-1773153690,toString:v4,b:v4,d:"g3lWuYSlmh"};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "c", "length", "d", "__proto__", "a", "b", "valueOf"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v12 = v11;
let v14 = undefined;
let v16 = 0;
function v18(v19,v20) {
    for (const v22 in "boolean") {
        let v24 = v19;
        if (v20) {
        } else {
            for (const v25 in v12) {
                v12.b = 10;
            }
            v24 = v6;
        }
        const v27 = "boolean"[1337];
        // v27 = .unknown
        v7.length = v22;
        let v28 = 0;
        do {
            const v29 = {toString:"boolean",a:v16,__proto__:v19,d:"number",c:v12,length:13.37};
            // v29 = .object(ofGroup: Object, withProperties: ["toString", "c", "length", "a", "__proto__", "d"])
            const v30 = v28 + 1;
            // v30 = .primitive
            v28 = v30;
        } while (v28 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v33 = v32;
const v34 = v18(v33);
// v34 = .unknown
const v35 = v18();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
