function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                const v13 = 1337 / v8;
                // v13 = .number
                v11 = v12;
                const v18 = [1337,1337];
                // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v19 = {length:"N0Xx92zvHQ"};
                // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
                const v20 = {constructor:13.37,length:13.37,__proto__:v19,toString:Number,a:"N0Xx92zvHQ"};
                // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"], withMethods: ["toString"])
                let v21 = v20;
                v21[v18] = 1337;
                const v23 = {length:v11};
                // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
                const v25 = (13.37)[v23];
                // v25 = .unknown
            } while (v11 < 7);
            const v27 = 10 + 1;
            // v27 = .primitive
            v8 = v27;
        } while (v8 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
