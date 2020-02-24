function main() {
function v1(v2,v3) {
    const v7 = {length:"N0Xx92zvHQ"};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v8 = {constructor:13.37,length:13.37,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
    let v9 = v8;
    for (const v11 in "object") {
        const v12 = v11 + 1;
        // v12 = .primitive
        break;
    }
}
for (let v16 = 0; v16 < 100; v16++) {
    const v17 = v1();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
