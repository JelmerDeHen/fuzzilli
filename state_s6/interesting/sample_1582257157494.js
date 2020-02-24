function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [Promise];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {valueOf:v4,toString:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString"])
const v9 = {toString:v6,__proto__:"number",valueOf:v7,b:v6,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "toString", "__proto__", "length"])
let v10 = 1337;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            try {
                let v21 = null;
                try {
                    const v22 = !v7;
                    // v22 = .boolean
                    v21 = v4;
                } catch(v23) {
                    const v24 = !v23;
                    // v24 = .boolean
                }
                let v25 = 0;
            } catch(v26) {
                let v29 = 0;
            }
        } while (v18 <= 8);
    }
}
}
%NeverOptimizeFunction(main);
main();
