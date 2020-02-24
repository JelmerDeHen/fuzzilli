function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "d", "valueOf", "length"])
function v10(v11,v12) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v20 = v7 + "function";
            // v20 = .primitive
            v1.toString = v11;
            let v22 = 0;
            const v23 = [v18,7];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v24 = {a:v15,c:v23,valueOf:v22,constructor:0,b:"N0Xx92zvHQ"};
            // v24 = .object(ofGroup: Object, withProperties: ["constructor", "b", "valueOf", "__proto__", "c", "a"])
            const v25 = {set:v12};
            // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
            const v26 = isNaN(v7);
            // v26 = .boolean
            const v27 = v1.__proto__;
            // v27 = .object()
            const v28 = "function" * "boolean";
            // v28 = .number
            const v29 = v7.length;
            // v29 = .unknown
            const v30 = v18 + 1;
            // v30 = .primitive
            v18 = v30;
            const v31 = 1337 >= v25;
            // v31 = .boolean
        } while (v18 < 8);
    }
}
const v33 = v10(1024,4.0);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
