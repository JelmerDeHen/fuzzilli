function main() {
try {
    const v1 = (7).__proto__;
    // v1 = .unknown
    const v3 = {};
    // v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v5 = {get:v1,set:Array};
    // v5 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
    const v7 = Object.defineProperty(v3,8,v5);
    // v7 = .undefined
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
