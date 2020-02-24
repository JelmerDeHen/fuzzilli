function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v12 = [1337];
            // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v13 = {__proto__:RegExp,length:v12,b:"Lg4kb1eIOi",toString:1337,valueOf:2552665081};
            // v13 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "length", "toString"], withMethods: ["__proto__"])
            let v15 = RegExp;
            let v16 = v15;
            const v19 = new Proxy(v16,Object);
            // v19 = .unknown
            const v20 = Object.freeze(v19);
            // v20 = .undefined
            const v21 = RegExp.bind(v13,v19,Object);
            // v21 = .unknown
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            const v26 = v7 + 1;
            // v26 = .primitive
            v7 = v26;
        } while (v7 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
