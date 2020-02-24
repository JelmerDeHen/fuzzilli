function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:4096,constructor:isFinite,a:v4,e:"match",d:4096};
// v8 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "d"], withMethods: ["constructor"])
const v9 = {toString:4096,length:v7,b:4096,a:isFinite,e:v8,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__", "e", "b", "d"], withMethods: ["a"])
let v10 = v8;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v19 = v13;
            const v20 = v19 + 1;
            // v20 = .primitive
            const v22 = [1337,1337];
            // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v25 = 0;
            const v28 = [1337,1337,1337,1337];
            // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v29 = v22.shift();
            // v29 = .unknown
            const v31 = Symbol.toPrimitive;
            // v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v31[v31] = v28;
            const v32 = 1024 % 13.37;
            // v32 = .number
            let v35 = 0;
            do {
                const v36 = v35 + 1;
                // v36 = .primitive
                v35 = v36;
            } while (v35 < 7);
            const v37 = v18 + 1;
            // v37 = .primitive
            v18 = v37;
        } while (v18 < 8);
    }
    return v8;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v40 = v39;
const v41 = v11(v40);
// v41 = .unknown
const v42 = v11();
// v42 = .unknown
const v44 = [13.37,13.37,13.37];
// v44 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v39[-2823825313] = v9;
const v45 = v11(v7,"match",...v4);
// v45 = .unknown
let v48 = 0;
while (v48 < 4) {
    const v50 = [1337,1337,1337];
    // v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v51 = v48 + 1;
    // v51 = .primitive
    v48 = v51;
}
}
%NeverOptimizeFunction(main);
main();
