function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    const v11 = [1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v12 = {__proto__:v11,a:v11,constructor:Number,e:13.37,length:"number",b:13.37};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "b", "e"], withMethods: ["constructor"])
    const v13 = 13.37 && v12;
    // v13 = .boolean
    let v16 = 127;
    const v19 = String.fromCharCode(v16,4159299528);
    // v19 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    let v21 = "p8Xp0R1moN";
    v21 = v19;
    const v22 = JSON.stringify(v21);
    // v22 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    v12[v22] = 13.37;
    let v24 = v13;
    const v25 = JSON.stringify(v24);
    // v25 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v27 = JSON.parse(v25,2435262485);
    // v27 = .unknown
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
}
}
%NeverOptimizeFunction(main);
main();
