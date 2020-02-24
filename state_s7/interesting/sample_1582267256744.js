function main() {
let v2 = "+scpKANtCK";
const v3 = v2.__proto__;
// v3 = .object()
const v5 = Symbol.iterator;
// v5 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v3[v5] = eval;
try {
    for (const v8 of v2) {
    }
} catch(v9) {
}
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
}
%NeverOptimizeFunction(main);
main();
