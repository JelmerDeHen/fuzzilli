function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [13.37,v4,v4,3848251203];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {toString:Infinity,c:Infinity,e:v4,a:13.37,__proto__:v5};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "a", "c", "e", "__proto__"])
for (const v9 in "boolean") {
    let v12 = 0;
    do {
        function v13(v14,v15,v16,v17) {
            'use strict'
            try {
                const v18 = v6.forEach();
                // v18 = .unknown
                let v20 = 1337;
                const v24 = v6.b(v20);
                // v24 = .unknown
                let v27 = 0;
            } catch(v31) {
            }
        }
        const v35 = v13(Reflect,Reflect,1337,9007199254740993);
        // v35 = .unknown
        const v36 = v12 + 1;
        // v36 = .primitive
        v12 = v36;
    } while (v12 < 8);
}
}
%NeverOptimizeFunction(main);
main();
