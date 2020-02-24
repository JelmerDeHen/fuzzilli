function main() {
let v5 = 0;
function v6(v7,v8,v9,v10,v11) {
    return v7;
}
const v12 = v5 + 1;
// v12 = .primitive
v5 = v12;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
let v19 = 0;
v16 = v17;
const v21 = Symbol.for(Symbol);
// v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
