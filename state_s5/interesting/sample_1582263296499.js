function main() {
const v2 = Symbol.toPrimitive;
// v2 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v3 = v2[v2];
// v3 = .unknown
try {
    const v5 = v3(v2,1337,257);
    // v5 = .unknown
} catch(v6) {
}
let v9 = 0;
let v12 = 0;
}
%NeverOptimizeFunction(main);
main();
