function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,Promise];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:-4294967295,__proto__:v4,toString:v4,d:-4294967295,length:v4,a:-4294967295};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "d", "a", "toString"])
const v9 = {e:13.37,valueOf:v4,__proto__:v6,toString:v6,a:v4,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "toString", "a", "d"])
let v10 = v7;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            const v25 = [13.37,13.37,-4294967297,13.37];
            // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v26 = "boolean".indexOf(v25,-4294967297);
            // v26 = .integer
            let v30 = 0;
            let v37 = 0;
            const v40 = eval("undefined");
            // v40 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            let v43 = 0;
            const v47 = v18 + 1;
            // v47 = .primitive
            v18 = v47;
        } while (v18 < 8);
    }
    return v8;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v50 = v49;
const v51 = v11(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
