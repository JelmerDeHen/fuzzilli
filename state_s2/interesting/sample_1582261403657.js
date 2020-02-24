function main() {
const v1 = {c:"2m0ge7xqih"};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v4 = {constructor:"symbol",length:9007199254740993};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
try {
    const v6 = Function(v1,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
