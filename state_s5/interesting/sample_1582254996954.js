function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = Object();
// v7 = .object()
function v9(v10,v11) {
    let v15 = 0;
    for (const v16 in "boolean") {
        v7.length = v16;
        const v19 = {get:gc};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v21 = Object.defineProperty(v3,9007199254740992,v19);
        // v21 = .undefined
        v15 = 0;
        with (Object) {
            const v22 = "object".replace("boolean",v16);
            // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        }
        const v23 = gc();
        // v23 = .undefined
        let v25 = 0;
        do {
            let v28 = 0;
            do {
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
            } while (v28 < 7);
            let v31 = 0;
            const v32 = {get:13.37,b:v1,a:0,length:1,__proto__:"boolean"};
            // v32 = .object(ofGroup: Object, withProperties: ["b", "length", "get", "a", "__proto__"])
            const v33 = v25 + 1;
            // v33 = .primitive
            v25 = v33;
        } while (v25 < 8);
    }
    const v34 = v15 + 1;
    // v34 = .primitive
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v37 = v36;
const v38 = v9(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
