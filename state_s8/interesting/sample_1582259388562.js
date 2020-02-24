function main() {
const v3 = {valueOf:13.37,e:-284639186,toString:"0DeB1+Gn+W",__proto__:-284639186};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "toString"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
const v9 = v3.__proto__;
// v9 = .object()
v9.e = v9;
const v11 = {get:parseFloat};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v13 = Object.defineProperty(v9,"length",v11);
// v13 = .undefined
const v17 = parseFloat("0DeB1+Gn+W");
// v17 = .float
v7 = v8;
}
%NeverOptimizeFunction(main);
main();
