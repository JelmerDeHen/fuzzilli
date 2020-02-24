function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
const v6 = String.fromCharCode("__proto__",2011007354,v3,2011007354,v3);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v7 = v6.padEnd(v2);
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v8 = {__proto__:0,length:v6,...v6,...0,...v6,...v2};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"], withMethods: ["split", "lastIndexOf", "indexOf", "slice", "trim", "charAt", "includes", "replace", "repeat", "startsWith", "substring", "padStart", "padEnd", "charCodeAt", "codePointAt", "concat", "endsWith"])
const v9 = String();
// v9 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = [2011007354,"__proto__"];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = {__proto__:String,length:13.37,valueOf:String,toString:2011007354,a:v13,b:"__proto__"};
// v15 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "b", "toString"], withMethods: ["__proto__", "valueOf"])
const v16 = {};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v17 = String;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
function v23(v24,v25) {
    for (const v27 in "boolean") {
        let v30 = 0;
        let v33 = 0;
        const v34 = v33 + 1;
        // v34 = .primitive
        v33 = v34;
        do {
            const v38 = v30 + 1;
            // v38 = .primitive
            try {
                for (const v41 in "e") {
                }
                const v42 = "undefined".slice(3);
                // v42 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            } catch(v43) {
            }
            v30 = v38;
        } while (v30 < 8);
    }
    return 2011007354;
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v46 = v45;
const v47 = v23(v46);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
