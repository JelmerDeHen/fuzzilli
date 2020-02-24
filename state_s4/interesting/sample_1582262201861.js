function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            function v10(v11,v12) {
                const v16 = {length:"N0Xx92zvHQ"};
                // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
                const v17 = {constructor:13.37,length:13.37,__proto__:v16,toString:Number,a:"N0Xx92zvHQ"};
                // v17 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
                const v18 = v17 != v12;
                // v18 = .boolean
            }
            const v22 = v10();
            // v22 = .unknown
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
            } while (v23 < 7);
            const v25 = v7 + 1;
            // v25 = .primitive
            v7 = v25;
        } while (v7 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
