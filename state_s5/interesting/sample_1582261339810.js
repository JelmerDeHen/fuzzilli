function main() {
let v1 = undefined;
for (const v3 in "boolean") {
    for (const v5 in "object") {
        function v6(v7,v8) {
            const v10 = {ownKeys:v8,preventExtensions:v8,defineProperty:v6,getPrototypeOf:v8,deleteProperty:v8,has:v6,set:v7,apply:v8};
            // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "ownKeys", "apply", "getPrototypeOf", "preventExtensions", "deleteProperty"], withMethods: ["defineProperty", "has"])
            const v12 = new Proxy(v6,v10);
            // v12 = .unknown
            const v13 = {toString:0,...Proxy,...v6,...v12};
            // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
        }
        const v14 = v6();
        // v14 = .unknown
    }
}
}
%NeverOptimizeFunction(main);
main();
