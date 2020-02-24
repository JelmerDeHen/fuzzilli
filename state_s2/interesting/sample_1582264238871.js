function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {a:-4294967297,valueOf:"function",b:1337,length:v5,d:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["b", "length", "d", "__proto__", "valueOf", "a"])
function v9(v10,v11) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            const v21 = [1337,1337,1337,1337];
            // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            "symbol".constructor = v21;
            let v23 = 0;
            const v24 = [v17,7];
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v25 = {a:v14,c:v24,valueOf:v23,constructor:0,b:"N0Xx92zvHQ"};
            // v25 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "valueOf", "a", "c"])
            const v26 = {set:v11};
            // v26 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
            const v27 = v0.__proto__;
            // v27 = .object()
            const v28 = v6.length;
            // v28 = .unknown
            const v29 = v17 + 1;
            // v29 = .primitive
            v17 = v29;
            const v30 = 1337 >= v26;
            // v30 = .boolean
        } while (v17 < 8);
    }
}
const v32 = v9(1024,4.0);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
