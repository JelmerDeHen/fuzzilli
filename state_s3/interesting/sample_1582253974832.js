function main() {
const v5 = {constructor:"y6h5..0Euk",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v6 = {constructor:"y6h5..0Euk",...v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
for (const v12 in "object") {
    delete v12[v12];
}
}
%NeverOptimizeFunction(main);
main();
