function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v9 = v8 + 1;
            // v9 = .primitive
            v8 = v9;
            const v12 = Symbol.toStringTag;
            // v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v13 = Symbol[v12];
            // v13 = .unknown
            const v14 = {getPrototypeOf:v13,get:v13};
            // v14 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
            const v16 = new Proxy(eval,v14);
            // v16 = .unknown
            this.valueOf = v16;
        } while (v8 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v20 = v19;
const v21 = v1(v20);
// v21 = .unknown
let v22 = "search";
let v24 = this;
let v25 = v24;
const v28 = new Proxy(v25,Object);
// v28 = .unknown
const v29 = Object.freeze(v28);
// v29 = .undefined
const v30 = v1(v22);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
