function main() {
let v1 = 13.37;
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {valueOf:v6,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e", "d"])
function v8(v9,v10) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            const v22 = v6.findIndex(Array,v7);
            // v22 = .integer
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            let v29 = 0;
            const v30 = v21 + 1;
            // v30 = .primitive
            v21 = v30;
        } while (v21 < 8);
    }
    const v31 = v17 + 1;
    // v31 = .primitive
    v17 = v31;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v35 = v34;
const v36 = v8(v35);
// v36 = .unknown
let v40 = 0;
let v42 = v1;
const v44 = [1337,1337,1337,1337];
// v44 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v45 = v44.toString();
// v45 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v47 = eval("undefined");
// v47 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
