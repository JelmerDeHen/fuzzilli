function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "length", "b", "valueOf", "a"])
function v10(v11,v12) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v20 = v7 + "function";
            // v20 = .primitive
            v1.toString = v11;
            const v23 = [1337,1337,1337,1337];
            // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            "symbol".constructor = v23;
            let v25 = 0;
            const v26 = [v18,7];
            // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v27 = {a:v15,c:v26,valueOf:v25,constructor:0,b:"N0Xx92zvHQ"};
            // v27 = .object(ofGroup: Object, withProperties: ["b", "a", "valueOf", "__proto__", "c", "constructor"])
            const v28 = {set:v12};
            // v28 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
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
