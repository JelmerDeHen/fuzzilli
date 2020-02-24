function main() {
const v48 = eval();
// v48 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v82 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v82 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "b", "d", "e"])
function v83(v84,v85) {
    let v88 = -2908695906;
    for (const v89 in "boolean") {
        let v92 = 0;
        do {
            let v94 = 0;
            const v95 = v94 + 1;
            // v95 = .primitive
            const v97 = [1337,1337];
            // v97 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v100 = 0;
            const v103 = [1337,1337,1337,1337];
            // v103 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v104 = v97.shift();
            // v104 = .unknown
            const v106 = Symbol.toPrimitive;
            // v106 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            v106[v106] = v103;
            const v107 = 1024 % 13.37;
            // v107 = .number
            let v110 = 0;
            do {
                const v111 = v110 + 1;
                // v111 = .primitive
                v110 = v111;
            } while (v110 < 7);
            const v112 = v92 + 1;
            // v112 = .primitive
            for (const v118 in "object") {
                let v120 = 0;
                const v122 = "N0Xx92zvHQ".__proto__;
                // v122 = .object()
                let v123 = 0;
                const v124 = v123 + 1;
                // v124 = .primitive
                for (const v126 in "replace") {
                }
                v122.toString = Number;
                const v127 = {__proto__:1337,...1024,...1337,...1024};
                // v127 = .object(ofGroup: Object, withProperties: ["__proto__"])
            }
            v92 = v112;
        } while (v92 < 8);
    }
    const v128 = v88 + 1;
    // v128 = .primitive
    return v82;
}
const v129 = v83();
// v129 = .unknown
}
%NeverOptimizeFunction(main);
main();
