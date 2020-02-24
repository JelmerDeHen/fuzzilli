function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "toString"])
const v5 = v3.__proto__;
// v5 = .object()
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
let v11 = RegExp;
let v12 = v11;
const v15 = new Proxy(v12,Object);
// v15 = .unknown
const v16 = Object.freeze(v15);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
