import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public variavel : string = "Conteúdo";

  constructor() { }

  ngOnInit(): void {
  }

  getFunction(){

    return "Qualquer coisa da função";
  }

  dividir(n1, n2){

    return n1 / n2;
  }

  public arrowF = text => "Arrow funcition também " + text;

  public url = [
    "https://static.mundoeducacao.bol.uol.com.br/mundoeducacao/conteudo_legenda/3c3d180b39a9621e72f692bee226ce1c.jpg",
    "https://abrilsuperinteressante.files.wordpress.com/2019/09/fotosvencedora.png?quality=70&strip=info&resize=680,453",
    "https://images.malaecuia.com.br/image/k/w/6/-/mnvrG.jpeg?w=1280&h=720&fit=crop&crop=focalpoint&auto=compress%2Cformat&s=d80803b20afbdaaaa868cbee84d9875b",
    "https://www.estudokids.com.br/wp-content/uploads/2020/01/outono-quando-comeca.jpg"
  ];

  getURL(){
    let imgNumber : number = Math.floor(Math.random() * 4);
    return this.url[imgNumber];
  }

  public propert_bind_text = "Texto pego pelo propert-bind";

}
