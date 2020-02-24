function main() {
let v2 = 0;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        let v12 = v7;
        while (v12 < 9) {
            const v13 = v12 % 9;
            // v13 = .number
            const v14 = v13 + 1;
            // v14 = .primitive
            const v19 = [13.37,13.37,13.37,13.37,13.37];
            // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v21 = [1337,v19,13.37,1024];
            // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v22 = {length:"N0Xx92zvHQ"};
            // v22 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v23 = {constructor:13.37,length:13.37,__proto__:v22,toString:Number,a:"N0Xx92zvHQ"};
            // v23 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length"], withMethods: ["toString"])
            const v24 = v21 <= v19;
            // v24 = .boolean
            const v29 = Object.entries(Object);
            // v29 = .object()
            v12 = v14;
        }
        const v30 = v10 + 1;
        // v30 = .primitive
        v10 = v30;
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v33 = v32;
const v34 = v3(v33);
// v34 = .unknown
const v35 = v3(v2,13.37);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
