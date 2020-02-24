function main() {
function v0(v1,v2) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v15 = Number.isFinite(Number);
            // v15 = .boolean
            Number[v15] = Number;
            const v17 = {length:"N0Xx92zvHQ"};
            // v17 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v18 = {constructor:13.37,length:13.37,__proto__:v17,toString:Number,a:"N0Xx92zvHQ"};
            // v18 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "length"], withMethods: ["toString"])
            let v19 = v18;
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            const v24 = v10 + 1;
            // v24 = .primitive
            v10 = v24;
        } while (v10 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
