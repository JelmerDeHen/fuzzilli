function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:String,length:v4,e:2952336965,valueOf:2952336965,d:2952336965,b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e", "length", "b"], withMethods: ["__proto__"])
const v9 = {b:v7,a:v8,__proto__:1337};
// v9 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__"])
let v10 = 1337;
const v13 = [1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v14(v15,v16) {
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                const v28 = [1337,1337,1337,1337];
                // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v29 = {b:2147483647};
                // v29 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
                function v30(v31,v32) {
                    for (const v33 in v28) {
                    }
                    return v13;
                }
                const v34 = v28.findIndex(v30,v29);
                // v34 = .integer
                v24 = v25;
            } while (v24 < 7);
            const v35 = v21 + 1;
            // v35 = .primitive
            v21 = v35;
        } while (v21 < 8);
    }
    return v8;
}
for (let v40 = 0; v40 < 100; v40++) {
    const v41 = v14(1337);
    // v41 = .unknown
}
"symbol".valueOf = v14;
const v42 = {};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v43 = [v42,v42,v42];
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v44 = String(1337);
// v44 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
