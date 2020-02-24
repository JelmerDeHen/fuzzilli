function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {valueOf:v5,length:13.37,d:127,e:127};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "length", "__proto__", "e"])
const v7 = {c:v5,valueOf:v6,d:Array,a:1337};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c", "a"], withMethods: ["d"])
let v10 = 0;
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v16 = v15;
let v18 = undefined;
function v19(v20,v21) {
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            let v29 = 0;
            const v31 = [1337,1337,1337,1337];
            // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v33 = Object.freeze(v31);
            // v33 = .undefined
            do {
                const v34 = v29 + 1;
                // v34 = .primitive
                v29 = v34;
            } while (v29 < 7);
            const v35 = v26 + 1;
            // v35 = .primitive
            v26 = v35;
        } while (v26 < 8);
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = v37;
const v39 = v19(v38);
// v39 = .unknown
const v42 = eval(1337);
// v42 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v45 = [-858827.400310643,-858827.400310643,-858827.400310643,-858827.400310643,-858827.400310643];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
Object[-268435456] = 1024;
}
%NeverOptimizeFunction(main);
main();
