function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "b", "__proto__", "d", "length"])
function v10(v11,v12) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v21 = 0;
            const v22 = [v18,7];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v23 = {a:v15,c:v22,valueOf:v21,constructor:0,b:"N0Xx92zvHQ"};
            // v23 = .object(ofGroup: Object, withProperties: ["b", "a", "constructor", "c", "__proto__", "valueOf"])
            const v25 = {set:v12};
            // v25 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
            const v27 = isNaN(v7);
            // v27 = .boolean
            const v28 = v1.__proto__;
            // v28 = .object()
            let v29 = v27;
            const v30 = v18 + 1;
            // v30 = .primitive
            v18 = v30;
        } while (v18 < 8);
    }
}
const v32 = v10(1024,4.0);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
