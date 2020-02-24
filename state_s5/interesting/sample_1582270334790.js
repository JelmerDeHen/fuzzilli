function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,"species",v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v6,constructor:1337,e:536870912,__proto__:Uint8ClampedArray,c:13.37,a:v4};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "c", "a", "__proto__", "constructor"])
function v9(v10,v11) {
    let v14 = 0;
    for (const v15 in "boolean") {
        let v19 = 0;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v21 = {constructor:10,c:0,...v4,...v19,..."boolean",...v11,...v10,...v14,...v7};
        // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "length"], withMethods: ["values", "entries", "unshift", "reduce", "toLocaleString", "shift", "sort", "reduceRight", "forEach", "every", "splice", "endsWith", "flat", "charAt", "keys", "reverse", "padStart", "filter", "repeat", "push", "map", "find", "join", "slice", "toString", "indexOf", "concat", "findIndex", "substring", "pop", "trim", "padEnd", "codePointAt", "includes", "replace", "charCodeAt", "copyWithin", "fill", "lastIndexOf", "some", "flatMap", "split", "startsWith"])
        let v23 = 0;
        do {
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            } while (v26 < 7);
            const v28 = v23 + 1;
            // v28 = .primitive
            v23 = v28;
        } while (v23 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v31 = v30;
const v32 = v9(v31);
// v32 = .unknown
const v33 = v9(Uint8ClampedArray,v8);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
