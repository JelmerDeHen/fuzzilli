function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:v6,b:"match",a:"match",c:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor", "b", "a"])
const v9 = {__proto__:v7,constructor:13.37,valueOf:v8,b:v7,toString:v7,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "b", "toString", "d"])
let v10 = v8;
const v12 = [1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16) {
    for (const v18 in "number") {
        let v21 = 0;
        do {
            let v24 = 0;
            const v26 = new Promise(Object,v15);
            // v26 = .object()
            const v29 = {constructor:Object};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
            const v31 = new Proxy(RegExp,v29);
            // v31 = .unknown
            v26.__proto__ = v12;
            let v34 = 0;
            do {
                const v35 = v34 + 1;
                // v35 = .primitive
                v34 = v35;
            } while (v34 < 8);
            const v36 = v21 + 1;
            // v36 = .primitive
            v21 = v36;
        } while (v21 < 8);
    }
    return v15;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v39 = v38;
const v40 = v14(v39);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
