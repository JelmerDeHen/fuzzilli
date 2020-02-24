function main() {
for (let v6 = 0; v6 < 3; v6++) {
    let v9 = 0;
    let v12 = undefined;
    const v16 = {valueOf:JSON,length:"search"};
    // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
    JSON[v16] = 13.37;
    const v20 = JSON.stringify(JSON,JSON,2153514987);
    // v20 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    const v21 = JSON.parse(v20,Object);
    // v21 = .unknown
    JSON.b = "search";
}
}
%NeverOptimizeFunction(main);
main();
