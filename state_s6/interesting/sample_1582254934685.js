function main() {
let v4 = 0;
while (v4 < 9) {
    const v5 = new Function("iterator");
    // v5 = .object(ofGroup: Function, withProperties: ["arguments", "constructor", "name", "prototype", "caller", "length", "__proto__"], withMethods: ["bind", "call", "apply"]) + .function([.anything...] => .unknown) + .constructor([.anything...] => .unknown)
    const v6 = v4 + 1;
    // v6 = .primitive
    v4 = v6;
}
}
%NeverOptimizeFunction(main);
main();
