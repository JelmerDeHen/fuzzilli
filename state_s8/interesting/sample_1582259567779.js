function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {d:-2,constructor:v4,c:1337,a:"q/+K04Gt.w",b:v7,__proto__:-2,valueOf:-2,e:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["a", "c", "e", "d", "constructor", "valueOf", "b", "__proto__"])
const v9 = {constructor:1337,__proto__:"q/+K04Gt.w"};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
let v10 = Int8Array;
const v12 = {c:String};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
for (let v16 = 0; v16 < 3; v16++) {
    function v17(v18,v19) {
        let v26 = 0;
        for (const v27 in "boolean") {
            let v30 = 0;
            do {
                let v33 = 0;
                const v35 = [1337,1337,1337,1337];
                // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v37 = Object.create(v35);
                // v37 = .object()
                const v38 = v33 + 1;
                // v38 = .primitive
                v33 = v38;
                let v41 = 0;
                const v42 = v30 + 1;
                // v42 = .primitive
                v30 = v42;
            } while (v30 < 8);
        }
        const v43 = v26 + 1;
        // v43 = .primitive
        v26 = v43;
        return 13.37;
    }
    const v46 = [1337];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v47 = v46;
    const v48 = v17(v47);
    // v48 = .unknown
}
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
v51 = v52;
for (let v56 = 0; v56 < 100; v56++) {
    const v57 = String(v6);
    // v57 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
const v58 = String(v8);
// v58 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
