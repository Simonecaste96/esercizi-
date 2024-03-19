var chiama = document.getElementById('chiama');
var ricarica = document.getElementById('ricarica');
var azzeraChiamate = document.getElementById('azzeraChiamate');
var User = /** @class */ (function () {
    function User(_nome, _cognome, _creditoResiduo, _numeroChiamate) {
        if (_creditoResiduo === void 0) { _creditoResiduo = 0; }
        if (_numeroChiamate === void 0) { _numeroChiamate = 0; }
        this.nome = _nome;
        this.cognome = _cognome;
        this.creditoResiduo = _creditoResiduo;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (p) {
        return this.creditoResiduo += p;
    };
    User.prototype.chiamata = function (p) {
        this.numeroChiamate += p;
        return this.creditoResiduo -= p * 0.20;
    };
    User.prototype.chiama404 = function () {
        return this.creditoResiduo;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamata = function (p) {
        this.numeroChiamate = p;
    };
    return User;
}());
var user = new User('Simone', 'Castelluccio');
console.log(user.ricarica(20));
console.log(user.chiamata(10));
console.log(user.chiama404());
console.log(user.getNumeroChiamata());
azzeraChiamate.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('puslante azzera cliccato');
    user.azzeraChiamata(0);
});
