function main() {
try {
    const v4 = {valueOf:4.0,length:"search"};
    // v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
    JSON[v4] = 13.37;
    const v7 = JSON.stringify(JSON,JSON,"search");
    // v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    const v8 = JSON.parse(v7,Uint32Array);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();
