function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v9 = {e:v6,b:1337,length:eval,a:v4};
// v9 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "a"], withMethods: ["length"])
let v10 = v4;
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
                // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
                return v18;
            }
            const v35 = v23 / 5.0;
            // v35 = .number
            const v36 = "__proto__".slice(v35,0);
            // v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            const v37 = v21 + 1;
            // v37 = .primitive
            v21 = v37;
        } while (v21 < 8);
    }
    return v4;
}
const v38 = v14(13.37);
// v38 = .unknown
const v39 = v38 + 1;
// v39 = .primitive
"function".e = "__proto__";
const v40 = v38.__proto__;
// v40 = .unknown
let v41 = v6;
const v42 = v14(v38,v38);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
