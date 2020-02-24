function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337,"species",v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:v6,constructor:1337,e:536870912,__proto__:Uint8ClampedArray,c:13.37,a:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "c", "constructor", "a"])
function v9(v10,v11) {
    let v14 = 0;
    for (const v15 in "boolean") {
        let v19 = 0;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v21 = {constructor:10,c:0,...v4,...v19,..."boolean",...v11,...v10,...v14,...v7};
        // v21 = .object(ofGroup: Object, withProperties: ["length", "c", "constructor", "__proto__"], withMethods: ["map", "lastIndexOf", "concat", "splice", "charCodeAt", "slice", "reduce", "repeat", "unshift", "entries", "split", "find", "indexOf", "keys", "fill", "substring", "endsWith", "some", "toString", "padEnd", "includes", "every", "filter", "join", "copyWithin", "replace", "flatMap", "forEach", "padStart", "startsWith", "shift", "trim", "charAt", "pop", "values", "codePointAt", "reverse", "findIndex", "toLocaleString", "reduceRight", "push", "flat", "sort"])
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
// v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v31 = v30;
const v32 = v9(v31);
// v32 = .unknown
const v33 = v9(Uint8ClampedArray,v8);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
