function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["length", "d", "a", "b", "valueOf", "__proto__"])
function v10(v11,v12) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v20 = v7 + "function";
            // v20 = .primitive
            v1.toString = v11;
            const v23 = [1337,1337,1337,1337];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            "symbol".constructor = v23;
            let v25 = 0;
            const v26 = [v18,7];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v27 = {a:v15,c:v26,valueOf:v25,constructor:0,b:"N0Xx92zvHQ"};
            // v27 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "c", "a", "constructor"])
            const v28 = {set:v12};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
            const v29 = isNaN(v7);
            // v29 = .boolean
            const v30 = v1.__proto__;
            // v30 = .object()
            const v31 = v7.length;
            // v31 = .unknown
            const v32 = v18 + 1;
            // v32 = .primitive
            v18 = v32;
            const v33 = 1337 >= v28;
            // v33 = .boolean
        } while (v18 < 8);
    }
}
const v35 = v10(1024,4.0);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
