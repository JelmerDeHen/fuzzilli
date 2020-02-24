function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = ["e",1337,v6];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:"e",toString:v6,length:"e",a:Boolean,d:Boolean,c:v7};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "toString", "c", "__proto__"], withMethods: ["d", "a"])
const v9 = {constructor:Boolean,toString:v7,a:1337,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "a"], withMethods: ["constructor"])
let v10 = 3999259790;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            const v22 = [1000000000.0,"object"];
            // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v25 = 0;
            const v26 = v22.join("boolean");
            // v26 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            let v32 = 0;
            const v33 = v25 + 1;
            // v33 = .primitive
            v25 = v33;
            let v36 = 0;
            const v37 = v36 + 1;
            // v37 = .primitive
            v36 = v37;
            const v38 = v19 + 1;
            // v38 = .primitive
            for (const v40 in "object") {
            }
            v19 = v38;
        } while (v19 < 8);
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v44 = v43;
const v45 = v12(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
