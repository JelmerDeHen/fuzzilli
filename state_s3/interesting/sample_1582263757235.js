function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v13 = {length:"unscopable"};
            // v13 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
            const v14 = {constructor:13.37,length:13.37,__proto__:v13,toString:Number,a:"unscopable"};
            // v14 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length"], withMethods: ["toString"])
            const v16 = {get:Int16Array};
            // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
            const v18 = Object.create(v14,1112105271,v16);
            // v18 = .object()
            const v19 = v8 + 1;
            // v19 = .primitive
            v8 = v19;
        } while (v8 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
