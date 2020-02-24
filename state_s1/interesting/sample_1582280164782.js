function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [arguments];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {e:-3104389285,b:"species",a:1337};
// v8 = .object(ofGroup: Object, withProperties: ["e", "b", "a", "__proto__"])
const v9 = {constructor:1337,b:v6,toString:v6};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "b", "toString", "__proto__"])
let v10 = v9;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v14 = v13;
let v16 = undefined;
for (const v19 in "boolean") {
    let v22 = 0;
    do {
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            try {
                const v29 = JSON.parse(Float32Array);
                // v29 = .unknown
            } catch(v30) {
            }
            const v33 = [13.37,13.37];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            for (const v34 in "object") {
                const v35 = ~v33;
                // v35 = .boolean
            }
        } while (v25 < 7);
        let v38 = 0;
        const v39 = v38 + 1;
        // v39 = .primitive
        v38 = v39;
        function v40(v41,v42,v43,v44,v45) {
            v16 = 1337;
        }
        try {
        } catch(v46) {
        }
        const v47 = v22 + 1;
        // v47 = .primitive
        v22 = v47;
    } while (v22 < 8);
}
v16 = v14;
}
%NeverOptimizeFunction(main);
main();
