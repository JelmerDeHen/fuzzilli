function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {valueOf:1337};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        function v12(v13,v14) {
            for (const v16 in "boolean") {
                let v19 = 0;
                const v21 = v19 + 1;
                // v21 = .primitive
                v19 = v21;
            }
        }
        const v23 = [1337];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v24 = v23;
        const v25 = v12(v24);
        // v25 = .unknown
        do {
            let v32 = 0;
            const v34 = [1337,1337];
            // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v37 = [13.37,v34,13.37];
            // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v38 = new Uint8ClampedArray(v37);
            // v38 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
            const v39 = [3156875969,3156875969,1337,DataView];
            // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v40 = {constructor:v39,c:v39,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
            // v40 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "a", "constructor", "e"])
            const v42 = Object(Object,v2,v1,v3,8);
            // v42 = .object()
            v40.valueOf = Object;
            const v43 = v11 + 1;
            // v43 = .primitive
            v11 = v43;
        } while (v11 < 8);
    }
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v46 = v45;
const v47 = v4(v46);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
