function main() {
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
const v38 = {get:Number,set:Number};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v40 = Object.defineProperty(Number,"__proto__",v38);
// v40 = .undefined
const v46 = v40[1337];
// v46 = .unknown
try {
} catch(v53) {
    let v56 = 0;
    function v57(v58,v59,v60,v61,v62) {
        let v64 = v57;
    }
    if (v46) {
    } else {
    }
    const v69 = Symbol.toPrimitive;
    // v69 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
const v136 = [1337,1337];
// v136 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v141 = [13.37,13.37];
// v141 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v143 = [13.37,v141];
// v143 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v144 = eval(...v136,...v143);
// v144 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
