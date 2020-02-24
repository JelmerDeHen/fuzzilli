function main() {
function v5(v6,v7) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v19 = {length:"N0Xx92zvHQ"};
            // v19 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v20 = {constructor:13.37,length:13.37,__proto__:v19,toString:Number,a:"N0Xx92zvHQ"};
            // v20 = .object(ofGroup: Object, withProperties: ["a", "constructor", "length", "__proto__"], withMethods: ["toString"])
            try {
                let v21 = 0;
                const v22 = Reflect.getPrototypeOf(v21);
                // v22 = .unknown
            } catch(v23) {
            }
            const v24 = v15 + 1;
            // v24 = .primitive
            v15 = v24;
        } while (v15 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v27 = v26;
const v28 = v5(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
