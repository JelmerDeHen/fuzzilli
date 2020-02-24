function main() {
try {
    const v2 = new Boolean(907);
    // v2 = .boolean
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v6 = Object.defineProperty(v2,10000,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
