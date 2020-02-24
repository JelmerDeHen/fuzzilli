function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v4[1337] = "byteLength";
for (const v6 in v4) {
}
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v10 = 0;
let v13 = 0;
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = {length:v15,a:v4,toString:v4,b:Int8Array,e:1337,constructor:-274804284};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "a", "b", "e", "length", "toString", "__proto__"])
function v19(v20,v21) {
    for (const v24 in "boolean") {
        let v27 = 0;
        do {
            try {
                let v30 = 0;
                do {
                    const v31 = [v27,7];
                    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                    const v32 = {a:v24,c:v31,valueOf:v30,constructor:0,b:"N0Xx92zvHQ"};
                    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "b", "constructor", "valueOf", "a"])
                    const v34 = {set:v21};
                    // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                    v16.length = 1;
                    v14.constructor = v30;
                    const v37 = Object.defineProperty(v32,"d",v34);
                    // v37 = .undefined
                } while (v30 < 7);
            } catch(v38) {
            }
            const v39 = v27 + 1;
            // v39 = .primitive
            v27 = v39;
        } while (v27 < 8);
    }
}
const v41 = v19(1024,4.0);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
