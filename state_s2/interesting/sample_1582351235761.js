function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6,13.37,-1013944918,-1013944918];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {c:1337,constructor:-1013944918};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
const v9 = {valueOf:v4,b:v8,e:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "e"])
let v10 = v6;
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
                // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
                return 0;
            }
            const v35 = v23 / 5.0;
            // v35 = .number
            const v36 = "__proto__".slice(v35,0);
            // v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            const v37 = v21 + 1;
            // v37 = .primitive
            v21 = v37;
        } while (v21 < 8);
    }
    return v7;
}
const v38 = v14(13.37);
// v38 = .unknown
v4.constructor = v14;
for (let v42 = 0; v42 < 100; v42++) {
}
const v43 = v14();
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
