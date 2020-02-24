function main() {
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
const v38 = {get:Number,set:Number};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
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
// v136 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v141 = [13.37,13.37];
// v141 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v143 = [13.37,v141];
// v143 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v144 = eval(...v136,...v143);
// v144 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
