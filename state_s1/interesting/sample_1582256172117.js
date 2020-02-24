function main() {
let v3 = 0;
do {
    const v6 = {constructor:"symbol",length:9007199254740993};
    // v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
    delete v6.length;
    const v7 = v3 + 1;
    // v7 = .primitive
    v3 = v7;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
