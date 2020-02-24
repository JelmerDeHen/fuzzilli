function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [13.37,v4,v4,3848251203];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {toString:Infinity,c:Infinity,e:v4,a:13.37,__proto__:v5};
// v6 = .object(ofGroup: Object, withProperties: ["e", "toString", "c", "__proto__", "a"])
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
