function main() {
let v2 = 0;
do {
    for (const v4 in "object") {
        const v8 = {length:"N0Xx92zvHQ"};
        // v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
        const v9 = {constructor:-858827.400310643,length:-858827.400310643,__proto__:v8,toString:Number,a:"N0Xx92zvHQ"};
        // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
    }
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v15 = v2 + 1;
    // v15 = .primitive
    v2 = v15;
} while (v2 < 6);
}
%NeverOptimizeFunction(main);
main();
