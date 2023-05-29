import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  constructor() { }
  produtoDetails = [
    {
      id: 1,
      geekName: "O Senhor Dos Anéis: Jornadas Na Terra Média",
      geekDetails: "Um jogo de tabuleiro cooperativo em português, que possui suporte ativo de um aplicativo!",
      geekPrice: 500,
      geekImg: "https://m.media-amazon.com/images/I/718C2HqCb-L._AC_SX679_.jpg"

    },
    {
      id: 2,
      geekName: "Funko Pop: Harry Potter",
      geekDetails: "Com detalhes incríveis e acabamento impecável, esta figura de Harry Potter será a peça-chave de sua coleção.",
      geekPrice: 150,
      geekImg: "https://images.tcdn.com.br/img/img_prod/723087/funko_pop_harry_potter_118_varinhas_8541_1_b52256524bfd4e642c81dc1ff9fa1f2b.png"

    },
    {
      id: 3,
      geekName: "Caneca Naruto Akatsuki",
      geekDetails: "Com capacidade de 300 ml, é ideal para bebidas quentes ou frias, como chá, café, suco ou refrigerante.",
      geekPrice: 45,
      geekImg: "https://images.tcdn.com.br/img/img_prod/723087/caneca_naruto_akatsuki_preta_7933_2_f02f29af00cd8b2adcd7409dfcc2d600.jpg"

    },
    {
      id: 4,
      geekName: "Jogo Grand Theft Auto V - PlayStation 5",
      geekDetails: "Vivencie o jogo em mundo aberto aclamado pela crítica da Rockstar Games, Grand Theft Auto V.",
      geekPrice: 250,
      geekImg: "https://d1sfzvg6s5tf2e.cloudfront.net/Custom/Content/Products/48/63/4863_gta-v-ps5_m1_638059213289006011.jpg"

    },
    {
      id: 5,
      geekName: "Jogo FIFA 23 - Xbox Series X",
      geekDetails: "FIFA 23 leva a experiência do futebol virtual a novos patamares, com recursos inovadores.",
      geekPrice: 200,
      geekImg: "https://m.media-amazon.com/images/I/61zPVEwdzBL.jpg"

    },
    {
      id: 6,
      geekName: "Console Xbox Series S",
      geekDetails: "O Xbox Series S é um console compacto, poderoso e acessível.",
      geekPrice: 1800,
      geekImg: "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg"

    },
    {
      id: 7,
      geekName: "Console Xbox Series X",
      geekDetails: "O Xbox Series X é o console mais poderoso da Microsoft.",
      geekPrice: 4000,
      geekImg: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/185202"

    },
    {
      id: 8,
      geekName: "Console Playstaion 5",
      geekDetails: "O PS5 é a mais recente geração de consoles da Sony, oferecendo uma experiência inovadora.",
      geekPrice: 5000,
      geekImg: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/181395/Console-Playstation-5-825GB-Leitor-Digital-PS5-_1658863170_g.jpg"

    }
  ]
}

