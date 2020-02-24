function main() {
for (const v4 in "boolean") {
    const v10 = [1337];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v11 = {__proto__:v10,a:v10,constructor:Number,e:13.37,length:"number",b:13.37};
    // v11 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "e", "a"], withMethods: ["constructor"])
    const v12 = 13.37 && v11;
    // v12 = .boolean
    let v15 = 127;
    const v18 = String.fromCharCode(v15,3085701344);
    // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    let v20 = "p8Xp0R1moN";
    v20 = v18;
    const v21 = JSON.stringify(v20);
    // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    v11[v21] = 13.37;
    let v23 = v12;
    const v24 = JSON.stringify(v23);
    // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v26 = JSON.parse(v24,2435262485);
    // v26 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
