function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [NaN,13.37,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {length:v4,constructor:v6,e:v7,b:1337,valueOf:1337,toString:1337,c:v6};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "toString", "e", "valueOf", "b", "constructor"])
const v9 = {d:"POSITIVE_INFINITY",constructor:NaN,e:"POSITIVE_INFINITY",a:NaN,valueOf:v8,__proto__:-4020227788,c:-4020227788,b:"POSITIVE_INFINITY"};
// v9 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "b", "valueOf", "d", "e", "__proto__"])
let v10 = -4020227788;
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v23 = 0;
            function v24(v25,v26,v27,v28) {
                'use strict'
                let v31 = -4096;
                let v32 = v31;
                const v33 = v32.toLocaleString();
                // v33 = .unknown
                const v34 = eval(v33);
                // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
                return "boolean";
            }
            const v35 = v23 / 5.0;
            // v35 = .number
            const v36 = "__proto__".slice(v35,0);
            // v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v37 = v21 + 1;
            // v37 = .primitive
            v21 = v37;
        } while (v21 < 8);
    }
    return v10;
}
const v38 = v14(13.37);
// v38 = .unknown
for (const v39 in v4) {
    const v40 = v14();
    // v40 = .unknown
}
const v41 = v14(v9,13.37);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
