 const chiama = document.getElementById('chiama') as HTMLButtonElement
 const ricarica = document.getElementById('ricarica') as HTMLButtonElement
 const azzeraChiamate = document.getElementById('azzeraChiamate') as HTMLButtonElement



interface Smartphone {
    creditoResiduo: number;
    numeroChiamate: number;
  }



  class User implements Smartphone{
    nome:string;
    cognome:string;
    creditoResiduo: number;
    numeroChiamate: number;

    constructor (_nome:string, _cognome:string, _creditoResiduo: number = 0 , _numeroChiamate: number = 0){
    this.nome = _nome;
    this.cognome = _cognome;
    this.creditoResiduo = _creditoResiduo;
    this.numeroChiamate = _numeroChiamate;
    

    }

    ricarica(p:number): number {
        return this.creditoResiduo += p ;
    }
    chiamata(p:number): number {
      this.numeroChiamate += p;
        return this.creditoResiduo -= p * 0.20; 
    }
    chiama404(): number {
         return this.creditoResiduo;
    }
    getNumeroChiamata(): number {
        return  this.numeroChiamate;
    }
    azzeraChiamata(p:number): void {
      
      this.numeroChiamate = p;  
      
          
    }

  
  }

 
let user = new User ('Simone', 'Castelluccio');
console.log(user.ricarica(20));
console.log(user.chiamata(10));
console.log(user.chiama404());
console.log(user.getNumeroChiamata());

azzeraChiamate.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log('puslante azzera cliccato')
user.azzeraChiamata(0)
});



   





