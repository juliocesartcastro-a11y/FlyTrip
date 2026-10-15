const destinosInformacoes = {
    "Paris": {
        pais: "França", continente: "Europa", valor: 4890, destaque: true,
        descricao: "Arte, arquitetura, gastronomia e alguns dos monumentos mais reconhecidos do mundo.",
        imagens: [
            "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Euro", idioma: "Francês", dias: "4 a 6 dias", estilo: "Cultura e gastronomia",
        melhorEpoca: "Primavera e outono costumam oferecer temperaturas agradáveis e bom equilíbrio entre clima e movimento.",
        destaques: "Torre Eiffel, Museu do Louvre, Arco do Triunfo, Montmartre e passeios às margens do Sena.",
        dica: "Reserve atrações concorridas com antecedência e leve calçados confortáveis para caminhar bastante."
    },
    "Tóquio": {
        pais: "Japão", continente: "Ásia", valor: 7350, destaque: true,
        descricao: "Uma combinação marcante de tecnologia, tradição, gastronomia e bairros cheios de personalidade.",
        imagens: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Iene", idioma: "Japonês", dias: "5 a 7 dias", estilo: "Tecnologia e cultura",
        melhorEpoca: "Primavera e outono são períodos muito procurados pelo clima e pelas paisagens.",
        destaques: "Shibuya, Asakusa, Akihabara, Templo Senso-ji e mirantes com vista para o skyline.",
        dica: "Organize o roteiro por bairros e aproveite o excelente transporte público para reduzir deslocamentos."
    },
    "Nova York": {
        pais: "Estados Unidos", continente: "América do Norte", valor: 5790, destaque: true,
        descricao: "Uma metrópole intensa com parques, arranha-céus, museus, compras e entretenimento.",
        imagens: [
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Dólar", idioma: "Inglês", dias: "4 a 7 dias", estilo: "Cidade e entretenimento",
        melhorEpoca: "Primavera e outono são ótimos para caminhar; o inverno oferece uma atmosfera especial de fim de ano.",
        destaques: "Times Square, Central Park, Estátua da Liberdade, Broadway e os grandes mirantes de Manhattan.",
        dica: "Use o metrô, agrupe atrações por região e deixe algum tempo livre para explorar bairros sem pressa."
    },
    "Londres": {
        pais: "Reino Unido", continente: "Europa", valor: 5260, destaque: false,
        descricao: "História, museus, parques e arquitetura em uma das capitais mais conhecidas da Europa.",
        imagens: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Libra", idioma: "Inglês", dias: "4 a 6 dias", estilo: "História e museus",
        melhorEpoca: "Entre maio e setembro os dias são mais longos, mas a cidade oferece programação durante o ano inteiro.",
        destaques: "Big Ben, London Eye, Tower Bridge, Museu Britânico, Camden e Notting Hill.",
        dica: "Planeje os deslocamentos de metrô e aproveite a grande quantidade de museus com entrada gratuita."
    },
    "Dubai": {
        pais: "Emirados Árabes Unidos", continente: "Ásia", valor: 6480, destaque: false,
        descricao: "Arquitetura futurista, deserto, compras e experiências modernas em grande escala.",
        imagens: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1708361089093-beef4c4584e7?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Dirham", idioma: "Árabe / Inglês", dias: "4 a 6 dias", estilo: "Luxo e modernidade",
        melhorEpoca: "De novembro a março, quando as temperaturas costumam ser mais confortáveis para atividades externas.",
        destaques: "Burj Khalifa, Dubai Mall, Palm Jumeirah, marina e passeios pelo deserto.",
        dica: "Respeite os costumes locais e organize atividades externas para horários de temperatura mais amena."
    },
    "Roma": {
        pais: "Itália", continente: "Europa", valor: 4650, destaque: false,
        descricao: "História, gastronomia e monumentos que transformam a cidade em um verdadeiro museu a céu aberto.",
        imagens: [
            "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=85",
            "https://images.unsplash.com/photo-1526026697130-3f870884a6e3?auto=format&fit=crop&w=1600&q=85"
        ],
        moeda: "Euro", idioma: "Italiano", dias: "4 a 6 dias", estilo: "História e gastronomia",
        melhorEpoca: "Primavera e outono costumam oferecer temperaturas agradáveis para explorar a cidade a pé.",
        destaques: "Coliseu, Fórum Romano, Fontana di Trevi, Vaticano e as praças históricas do centro.",
        dica: "Reserve horários para atrações principais e deixe espaço no roteiro para descobrir ruas e restaurantes locais."
    },
    "Madri": {
        pais: "Espanha", continente: "Europa", valor: 4390, destaque: false,
        descricao: "Museus, parques, gastronomia e vida urbana vibrante no coração da Espanha.",
        imagens: ["https://images.unsplash.com/photo-1664457187676-af613a1fc511?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Euro", idioma: "Espanhol", dias: "4 a 5 dias", estilo: "Arte e vida urbana",
        melhorEpoca: "Primavera e outono ajudam a evitar os períodos mais quentes e frios do ano.",
        destaques: "Museu do Prado, Parque do Retiro, Palácio Real, Gran Vía e Plaza Mayor.",
        dica: "A região central é excelente para caminhar; combine museus durante o dia com gastronomia à noite."
    },
    "Lisboa": {
        pais: "Portugal", continente: "Europa", valor: 3990, destaque: true,
        descricao: "Miradouros, bondes, azulejos, gastronomia e ruas históricas próximas ao rio Tejo.",
        imagens: ["https://images.unsplash.com/photo-1611135459835-0d49a7c56c1c?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Euro", idioma: "Português", dias: "4 a 5 dias", estilo: "História e gastronomia",
        melhorEpoca: "Primavera e início do outono costumam combinar temperaturas agradáveis e bons passeios ao ar livre.",
        destaques: "Belém, Alfama, Praça do Comércio, Castelo de São Jorge e os famosos miradouros.",
        dica: "Use calçados confortáveis: as ladeiras fazem parte da experiência de conhecer Lisboa."
    },
    "Amsterdã": {
        pais: "Países Baixos", continente: "Europa", valor: 5190, destaque: false,
        descricao: "Canais, bicicletas, museus e arquitetura histórica em uma cidade compacta e charmosa.",
        imagens: ["https://images.unsplash.com/photo-1723152720678-da4ee06f4505?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Euro", idioma: "Holandês", dias: "3 a 5 dias", estilo: "Museus e canais",
        melhorEpoca: "Primavera é famosa pelas flores; verão oferece dias mais longos para aproveitar passeios externos.",
        destaques: "Rijksmuseum, Museu Van Gogh, Jordaan, canais e passeios de barco.",
        dica: "Explore áreas a pé ou de transporte público e tenha atenção especial às ciclovias."
    },
    "Atenas": {
        pais: "Grécia", continente: "Europa", valor: 5450, destaque: false,
        descricao: "Ruínas antigas, bairros históricos e uma forte ligação entre a cidade moderna e a Grécia clássica.",
        imagens: ["https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Euro", idioma: "Grego", dias: "3 a 5 dias", estilo: "História e arqueologia",
        melhorEpoca: "Primavera e outono costumam ser mais confortáveis para visitar sítios arqueológicos ao ar livre.",
        destaques: "Acrópole, Partenon, Plaka, Ágora Antiga e Museu da Acrópole.",
        dica: "Comece as visitas históricas cedo para aproveitar temperaturas mais amenas e menos movimento."
    },
    "Cairo": {
        pais: "Egito", continente: "África", valor: 5890, destaque: false,
        descricao: "Uma viagem por milhares de anos de história com pirâmides, museus e paisagens do deserto.",
        imagens: ["https://images.unsplash.com/photo-1772791281295-25470ca95b85?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Libra egípcia", idioma: "Árabe", dias: "4 a 6 dias", estilo: "História e aventura",
        melhorEpoca: "Meses mais amenos, entre o fim do outono e o início da primavera, facilitam os passeios externos.",
        destaques: "Pirâmides de Gizé, Esfinge, museus egípcios, mercados e passeios pelo Nilo.",
        dica: "Contrate passeios organizados quando fizer sentido e leve proteção solar para as áreas abertas."
    },
    "Bangkok": {
        pais: "Tailândia", continente: "Ásia", valor: 6990, destaque: false,
        descricao: "Templos, mercados, vida noturna e uma gastronomia de rua reconhecida mundialmente.",
        imagens: ["https://media4.thrillophilia.com/attractions/images/000/008/499/original/1627102944_shutterstock_1435404743.jpg?dpr=1.5&h=900&w=1500"],
        moeda: "Baht", idioma: "Tailandês", dias: "4 a 6 dias", estilo: "Templos e gastronomia",
        melhorEpoca: "Entre novembro e fevereiro o clima costuma ser menos quente e com menor volume de chuvas.",
        destaques: "Grand Palace, Wat Arun, Wat Pho, mercados, barcos pelo rio e culinária local.",
        dica: "Respeite regras de vestimenta em templos e experimente diferentes regiões da cidade usando transporte público."
    },
    "Singapura": {
        pais: "Singapura", continente: "Ásia", valor: 7590, destaque: false,
        descricao: "Uma cidade-estado moderna com arquitetura, jardins, gastronomia e excelente infraestrutura urbana.",
        imagens: ["https://images.unsplash.com/photo-1723185515463-43487d4ad2c4?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Dólar de Singapura", idioma: "Inglês / Mandarim", dias: "3 a 5 dias", estilo: "Modernidade e gastronomia",
        melhorEpoca: "É possível visitar o ano inteiro; o clima é quente e úmido, com possibilidade de chuva em qualquer estação.",
        destaques: "Marina Bay Sands, Gardens by the Bay, Merlion, Chinatown e bairros gastronômicos.",
        dica: "Use metrô para se deslocar; a rede é eficiente e facilita conhecer várias áreas em poucos dias."
    },
    "Sydney": {
        pais: "Austrália", continente: "Oceania", valor: 8990, destaque: true,
        descricao: "Praias, porto, arquitetura e natureza em uma das cidades mais conhecidas da Austrália.",
        imagens: ["https://images.unsplash.com/photo-1556089309-389321ee92d9?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Dólar australiano", idioma: "Inglês", dias: "5 a 7 dias", estilo: "Praia e cidade",
        melhorEpoca: "Primavera e outono costumam ter temperaturas agradáveis e boa combinação de cidade e atividades externas.",
        destaques: "Opera House, Harbour Bridge, Bondi Beach, Darling Harbour e trilhas costeiras.",
        dica: "Separe ao menos um dia para praias e outro para explorar a região do porto com calma."
    },
    "Toronto": {
        pais: "Canadá", continente: "América do Norte", valor: 5690, destaque: false,
        descricao: "Uma cidade multicultural às margens do Lago Ontário, com bairros diversos e skyline marcante.",
        imagens: ["https://images.unsplash.com/photo-1559869824-929df9dab35e?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Dólar canadense", idioma: "Inglês", dias: "4 a 6 dias", estilo: "Cidade e cultura",
        melhorEpoca: "Primavera, verão e início do outono são bons períodos para explorar parques e áreas próximas ao lago.",
        destaques: "CN Tower, waterfront, St. Lawrence Market, ilhas de Toronto e bairros multiculturais.",
        dica: "Se houver tempo, considere uma viagem de um dia até as Cataratas do Niágara."
    },
    "Buenos Aires": {
        pais: "Argentina", continente: "América do Sul", valor: 1890, destaque: true,
        descricao: "Arquitetura, cafés, tango, gastronomia e uma atmosfera urbana muito próxima do Brasil.",
        imagens: ["https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Peso argentino", idioma: "Espanhol", dias: "3 a 5 dias", estilo: "Gastronomia e cultura",
        melhorEpoca: "Primavera e outono oferecem temperaturas agradáveis para caminhar pelos bairros da cidade.",
        destaques: "Obelisco, Puerto Madero, Recoleta, Palermo, Caminito e apresentações de tango.",
        dica: "Organize o roteiro por bairros e reserve tempo para cafés, restaurantes e caminhadas."
    },
    "Santiago": {
        pais: "Chile", continente: "América do Sul", valor: 1590, destaque: false,
        descricao: "Uma capital moderna cercada pela Cordilheira dos Andes e próxima de vinícolas e montanhas.",
        imagens: ["https://images.unsplash.com/photo-1721398899108-97dcf4c9ec5f?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Peso chileno", idioma: "Espanhol", dias: "3 a 5 dias", estilo: "Cidade e montanha",
        melhorEpoca: "O período ideal depende do objetivo: inverno para neve; primavera e outono para passeios urbanos.",
        destaques: "Cerro San Cristóbal, Sky Costanera, centro histórico, vinícolas e cordilheira.",
        dica: "Confira a visibilidade da cordilheira e planeje bate-voltas de acordo com a estação."
    },
    "Cancún": {
        pais: "México", continente: "América do Norte", valor: 4290, destaque: true,
        descricao: "Mar azul-turquesa, praias claras e fácil acesso a passeios históricos e naturais.",
        imagens: ["https://images.unsplash.com/photo-1630252565669-ffb434c795e2?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Peso mexicano", idioma: "Espanhol", dias: "5 a 7 dias", estilo: "Praia e lazer",
        melhorEpoca: "Entre dezembro e abril costuma haver menor volume de chuva e condições agradáveis para praia.",
        destaques: "Zona Hoteleira, Isla Mujeres, cenotes, praias e passeios para sítios arqueológicos.",
        dica: "Intercale dias de praia com passeios e verifique antecipadamente o que está incluído em cada tour."
    },
    "Cidade do Cabo": {
        pais: "África do Sul", continente: "África", valor: 6290, destaque: false,
        descricao: "Montanhas, praias, vinhos e paisagens naturais impressionantes no extremo sul da África.",
        imagens: ["https://www.pelago.com/img/products/ZA-South%20Africa/honeymoon-vacation-donial-design-tour/61433575-c8fe-4cec-923f-d17458f80985_honeymoon-vacation-donial-design-tour.jpg"],
        moeda: "Rand", idioma: "Inglês / Africâner", dias: "5 a 7 dias", estilo: "Natureza e aventura",
        melhorEpoca: "De novembro a março há muitos dias ensolarados; outras épocas também podem ser interessantes conforme o roteiro.",
        destaques: "Table Mountain, V&A Waterfront, Cape Point, praias e rotas de vinho próximas.",
        dica: "Reserve dias flexíveis para Table Mountain, pois vento e nuvens podem afetar a visita."
    },
    "Istambul": {
        pais: "Turquia", continente: "Europa", valor: 5590, destaque: false,
        descricao: "Uma cidade entre continentes, marcada por mesquitas, mercados, história e o estreito de Bósforo.",
        imagens: ["https://images.unsplash.com/photo-1760184390678-dd49c89c61e1?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Lira turca", idioma: "Turco", dias: "4 a 6 dias", estilo: "História e cultura",
        melhorEpoca: "Primavera e outono costumam proporcionar temperaturas agradáveis para explorar a cidade.",
        destaques: "Santa Sofia, Mesquita Azul, Grande Bazar, Bósforo e Palácio de Topkapi.",
        dica: "Combine atrações históricas com um passeio de barco para entender melhor a geografia da cidade."
    },
    "Seul": {
        pais: "Coreia do Sul", continente: "Ásia", valor: 7490, destaque: false,
        descricao: "Palácios históricos, bairros modernos, tecnologia, gastronomia e cultura pop no mesmo destino.",
        imagens: ["https://images.unsplash.com/photo-1750511232558-52e4213dc1d6?auto=format&fit=crop&w=1600&q=85"],
        moeda: "Won", idioma: "Coreano", dias: "5 a 7 dias", estilo: "Cultura e tecnologia",
        melhorEpoca: "Primavera e outono costumam oferecer clima confortável e paisagens muito fotogênicas.",
        destaques: "Gyeongbokgung, Bukchon Hanok Village, N Seoul Tower, Hongdae e mercados tradicionais.",
        dica: "Use o metrô para circular e misture atrações históricas com bairros modernos no roteiro."
    }
};

const formatadorMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const FALLBACK_IMAGEM = "imagens/hero-aviao-flytrip.png";
const MAX_PARCELAS = 10;

function valorFormatado(valor) {
    return formatadorMoeda.format(valor);
}

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function criarImagem(src, alt, classe) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = classe;
    img.loading = "lazy";
    img.addEventListener("error", function() {
        if (img.dataset.fallbackAplicado) return;
        img.dataset.fallbackAplicado = "true";
        img.src = FALLBACK_IMAGEM;
        img.alt = "Imagem alternativa FlyTrip";
    });
    return img;
}

function criarCardDestino(nome, destino, linkDireto = false) {
    const card = document.createElement("article");
    card.className = "destino-card";
    card.dataset.destino = nome;

    const imagemWrapper = document.createElement("div");
    imagemWrapper.className = "destino-imagem";
    imagemWrapper.appendChild(criarImagem(destino.imagens[0], nome + " - " + destino.pais, "destino-imagem-arquivo"));

    const conteudo = document.createElement("div");
    conteudo.className = "destino-conteudo";
    conteudo.innerHTML = `
        <div class="destino-topo">
            <p class="destino-pais">${destino.pais} • ${destino.continente}</p>
            <h3 class="destino-titulo">${nome}</h3>
            <p class="destino-descricao">${destino.descricao}</p>
        </div>
        <div class="destino-preco-resumo">
            <span class="destino-preco-label">A partir de</span>
            <strong class="destino-preco-card">${valorFormatado(destino.valor)}</strong>
            <span class="destino-parcela-card">ou ${MAX_PARCELAS}x de ${valorFormatado(destino.valor / MAX_PARCELAS)} sem juros*</span>
        </div>
    `;

    const link = document.createElement("a");
    link.className = "destino-link";
    link.textContent = "Conhecer destino →";
    link.href = linkDireto ? `destinos.html?destino=${encodeURIComponent(nome)}` : "#";
    link.dataset.abrirDestino = nome;
    conteudo.appendChild(link);

    card.appendChild(imagemWrapper);
    card.appendChild(conteudo);
    return card;
}

function renderizarHome() {
    const grade = document.getElementById("destinos-populares");
    if (!grade) return;
    grade.innerHTML = "";
    Object.entries(destinosInformacoes)
        .filter(([, destino]) => destino.destaque)
        .slice(0, 6)
        .forEach(([nome, destino]) => grade.appendChild(criarCardDestino(nome, destino, true)));
}

function renderizarTodosDestinos() {
    const grade = document.getElementById("destinos-grade-completa");
    if (!grade) return;

    const busca = document.getElementById("busca-destino");
    const filtroContinente = document.getElementById("filtro-continente");
    const contagem = document.getElementById("resultados-contagem");
    const semResultados = document.getElementById("sem-resultados");

    const termo = normalizarTexto(busca ? busca.value.trim() : "");
    const continente = filtroContinente ? filtroContinente.value : "Todos";

    const filtrados = Object.entries(destinosInformacoes).filter(([nome, destino]) => {
        const texto = normalizarTexto(`${nome} ${destino.pais} ${destino.continente} ${destino.estilo} ${destino.descricao}`);
        const combinaBusca = !termo || texto.includes(termo);
        const combinaContinente = continente === "Todos" || destino.continente === continente;
        return combinaBusca && combinaContinente;
    });

    grade.innerHTML = "";
    filtrados.forEach(([nome, destino]) => grade.appendChild(criarCardDestino(nome, destino, false)));
    if (contagem) contagem.textContent = `${filtrados.length} ${filtrados.length === 1 ? "destino encontrado" : "destinos encontrados"}`;
    if (semResultados) semResultados.hidden = filtrados.length !== 0;
}

function configurarFiltros() {
    const busca = document.getElementById("busca-destino");
    const filtro = document.getElementById("filtro-continente");
    const limpar = document.getElementById("limpar-filtros");
    if (busca) busca.addEventListener("input", renderizarTodosDestinos);
    if (filtro) filtro.addEventListener("change", renderizarTodosDestinos);
    if (limpar) limpar.addEventListener("click", function() {
        if (busca) busca.value = "";
        if (filtro) filtro.value = "Todos";
        renderizarTodosDestinos();
    });
}

function montarDetalhesPagamento(tipoPagamento, valor) {
    if (tipoPagamento === "pix") {
        return `<p class="pagamento-detalhes-titulo">PIX</p><p class="pagamento-detalhes-texto">Pagamento à vista: <strong>${valorFormatado(valor)}</strong></p><p class="pagamento-aviso">Confirmação simulada imediata.</p>`;
    }
    if (tipoPagamento === "debito") {
        return `<p class="pagamento-detalhes-titulo">Débito</p><p class="pagamento-detalhes-texto">Pagamento à vista: <strong>${valorFormatado(valor)}</strong></p>`;
    }
    if (tipoPagamento === "boleto") {
        return `<p class="pagamento-detalhes-titulo">Boleto</p><p class="pagamento-detalhes-texto">Pagamento à vista: <strong>${valorFormatado(valor)}</strong></p><p class="pagamento-aviso">Compensação demonstrativa em até 2 dias úteis.</p>`;
    }
    if (tipoPagamento === "credito") {
        let linhas = "";
        for (let parcela = 1; parcela <= MAX_PARCELAS; parcela++) {
            linhas += `<div class="credito-item"><span>${parcela}x</span><strong>${valorFormatado(valor / parcela)}</strong></div>`;
        }
        return `<p class="pagamento-detalhes-titulo">Cartão de crédito</p><div class="credito-lista">${linhas}</div><p class="pagamento-sem-juros">Parcelamento demonstrativo em até ${MAX_PARCELAS}x sem juros.</p>`;
    }
    return "";
}

const modalDestino = document.getElementById("modal-destino");
const fecharModal = document.getElementById("fechar-modal");
const fecharModalOverlay = document.getElementById("fechar-modal-overlay");
const modalPais = document.getElementById("modal-pais");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalValor = document.getElementById("modal-valor");
const modalParcela = document.getElementById("modal-parcela");
const modalImagemPrincipal = document.getElementById("modal-imagem-principal");
const abrirImagemPrincipal = document.getElementById("abrir-imagem-principal");
const modalImagens = document.getElementById("modal-imagens");
const modalInfoRapida = document.getElementById("modal-info-rapida");
const tituloGaleria = document.getElementById("titulo-galeria");
const pagamentoOpcoes = document.querySelectorAll(".pagamento-opcao");
const pagamentoDetalhes = document.getElementById("pagamento-detalhes");
const abrirSaibaMais = document.getElementById("abrir-saiba-mais");
const modalSaibaMais = document.getElementById("modal-saiba-mais");
const fecharSaibaMais = document.getElementById("fechar-saiba-mais");
const fecharSaibaMaisOverlay = document.getElementById("fechar-saiba-mais-overlay");
const detalhePais = document.getElementById("detalhe-pais");
const detalheTitulo = document.getElementById("detalhe-titulo");
const detalheSecoes = document.getElementById("detalhe-secoes");
const galeriaTelaCheia = document.getElementById("galeria-tela-cheia");
const galeriaTelaCheiaOverlay = document.getElementById("galeria-tela-cheia-overlay");
const galeriaTelaCheiaFechar = document.getElementById("galeria-tela-cheia-fechar");
const galeriaTelaCheiaImagem = document.getElementById("galeria-tela-cheia-imagem");
const galeriaTelaCheiaLegenda = document.getElementById("galeria-tela-cheia-legenda");
let destinoAberto = null;
let nomeDestinoAberto = null;

function preencherSaibaMais(nome, destino) {
    if (!detalheSecoes) return;
    detalhePais.textContent = `${destino.pais} • ${destino.continente}`;
    detalheTitulo.textContent = nome;
    const secoes = [
        { titulo: "Visão geral", texto: destino.descricao },
        { titulo: "Melhor época", texto: destino.melhorEpoca },
        { titulo: "Pontos que merecem destaque", texto: destino.destaques },
        { titulo: "Dica rápida", texto: destino.dica }
    ];
    detalheSecoes.innerHTML = "";
    secoes.forEach(function(secao) {
        const bloco = document.createElement("article");
        bloco.className = "detalhe-secao";
        bloco.innerHTML = `<h3 class="detalhe-secao-titulo">${secao.titulo}</h3><p class="detalhe-secao-texto">${secao.texto}</p>`;
        detalheSecoes.appendChild(bloco);
    });
}

function abrirImagemTelaCheia(imagem, legenda) {
    if (!galeriaTelaCheia || !galeriaTelaCheiaImagem) return;
    galeriaTelaCheiaImagem.src = imagem;
    galeriaTelaCheiaImagem.alt = legenda;
    galeriaTelaCheiaLegenda.textContent = legenda;
    galeriaTelaCheia.classList.add("galeria-tela-cheia-aberta");
    galeriaTelaCheia.setAttribute("aria-hidden", "false");
    document.body.classList.add("body-modal-aberto");
}

function fecharImagemTelaCheia() {
    if (!galeriaTelaCheia) return;
    galeriaTelaCheia.classList.remove("galeria-tela-cheia-aberta");
    galeriaTelaCheia.setAttribute("aria-hidden", "true");
    if (!modalDestino || !modalDestino.classList.contains("modal-destino-aberto")) document.body.classList.remove("body-modal-aberto");
}

function abrirModalDestino(nomeDestino) {
    const destino = destinosInformacoes[nomeDestino];
    if (!destino || !modalDestino) return;
    destinoAberto = destino;
    nomeDestinoAberto = nomeDestino;

    modalPais.textContent = `${destino.pais} • ${destino.continente}`;
    modalTitulo.textContent = nomeDestino;
    modalDescricao.textContent = destino.descricao;
    modalValor.textContent = valorFormatado(destino.valor);
    modalParcela.textContent = `ou ${MAX_PARCELAS}x de ${valorFormatado(destino.valor / MAX_PARCELAS)} sem juros*`;
    modalImagemPrincipal.src = destino.imagens[0];
    modalImagemPrincipal.alt = `${nomeDestino} - imagem principal`;
    modalImagemPrincipal.onerror = function() { modalImagemPrincipal.src = FALLBACK_IMAGEM; };

    modalInfoRapida.innerHTML = "";
    [
        { titulo: "Moeda", texto: destino.moeda },
        { titulo: "Idioma", texto: destino.idioma },
        { titulo: "Sugestão", texto: destino.dias },
        { titulo: "Estilo", texto: destino.estilo }
    ].forEach(function(item) {
        const card = document.createElement("div");
        card.className = "modal-destino-info-card";
        card.innerHTML = `<p class="modal-destino-info-card-titulo">${item.titulo}</p><p class="modal-destino-info-card-texto">${item.texto}</p>`;
        modalInfoRapida.appendChild(card);
    });

    modalImagens.innerHTML = "";
    if (destino.imagens.length > 1) {
        tituloGaleria.textContent = "Galeria do destino";
        modalImagens.hidden = false;
        destino.imagens.forEach(function(imagem, index) {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "modal-destino-thumb";
            const thumb = criarImagem(imagem, `${nomeDestino} - imagem ${index + 1}`, "modal-destino-imagem");
            botao.appendChild(thumb);
            botao.addEventListener("click", function() {
                modalImagemPrincipal.src = imagem;
                modalImagemPrincipal.alt = `${nomeDestino} - imagem ${index + 1}`;
                abrirImagemTelaCheia(imagem, `${nomeDestino} - imagem ${index + 1}`);
            });
            modalImagens.appendChild(botao);
        });
    } else {
        tituloGaleria.textContent = "Imagem selecionada do destino";
        modalImagens.hidden = true;
    }

    pagamentoDetalhes.innerHTML = '<p class="pagamento-detalhes-titulo">Selecione uma opção</p><p class="pagamento-detalhes-texto">Escolha uma forma de pagamento para visualizar as condições.</p>';
    pagamentoOpcoes.forEach(btn => btn.classList.remove("pagamento-opcao-ativa"));
    preencherSaibaMais(nomeDestino, destino);

    modalDestino.classList.add("modal-destino-aberto");
    modalDestino.setAttribute("aria-hidden", "false");
    document.body.classList.add("body-modal-aberto");
}

function fecharModalDestino() {
    if (!modalDestino) return;
    modalDestino.classList.remove("modal-destino-aberto");
    modalDestino.setAttribute("aria-hidden", "true");
    if (modalSaibaMais) {
        modalSaibaMais.classList.remove("modal-saiba-mais-aberto");
        modalSaibaMais.setAttribute("aria-hidden", "true");
    }
    if (galeriaTelaCheia) {
        galeriaTelaCheia.classList.remove("galeria-tela-cheia-aberta");
        galeriaTelaCheia.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("body-modal-aberto");
}

function configurarModais() {
    document.addEventListener("click", function(event) {
        const link = event.target.closest("[data-abrir-destino]");
        if (!link || !modalDestino) return;
        if (window.location.pathname.endsWith("index.html") || !window.location.pathname.includes("destinos")) return;
        event.preventDefault();
        abrirModalDestino(link.dataset.abrirDestino);
    });

    pagamentoOpcoes.forEach(function(opcao) {
        opcao.addEventListener("click", function() {
            if (!destinoAberto) return;
            pagamentoOpcoes.forEach(btn => btn.classList.remove("pagamento-opcao-ativa"));
            opcao.classList.add("pagamento-opcao-ativa");
            pagamentoDetalhes.innerHTML = montarDetalhesPagamento(opcao.dataset.pagamento, destinoAberto.valor);
        });
    });

    if (abrirImagemPrincipal) abrirImagemPrincipal.addEventListener("click", function() {
        if (modalImagemPrincipal && modalImagemPrincipal.src) abrirImagemTelaCheia(modalImagemPrincipal.src, modalImagemPrincipal.alt);
    });
    if (abrirSaibaMais) abrirSaibaMais.addEventListener("click", function() {
        if (!modalSaibaMais || !destinoAberto) return;
        modalSaibaMais.classList.add("modal-saiba-mais-aberto");
        modalSaibaMais.setAttribute("aria-hidden", "false");
    });
    if (fecharSaibaMais) fecharSaibaMais.addEventListener("click", function() {
        modalSaibaMais.classList.remove("modal-saiba-mais-aberto");
        modalSaibaMais.setAttribute("aria-hidden", "true");
    });
    if (fecharSaibaMaisOverlay) fecharSaibaMaisOverlay.addEventListener("click", function() {
        modalSaibaMais.classList.remove("modal-saiba-mais-aberto");
        modalSaibaMais.setAttribute("aria-hidden", "true");
    });
    if (fecharModal) fecharModal.addEventListener("click", fecharModalDestino);
    if (fecharModalOverlay) fecharModalOverlay.addEventListener("click", fecharModalDestino);
    if (galeriaTelaCheiaOverlay) galeriaTelaCheiaOverlay.addEventListener("click", fecharImagemTelaCheia);
    if (galeriaTelaCheiaFechar) galeriaTelaCheiaFechar.addEventListener("click", fecharImagemTelaCheia);

    document.addEventListener("keydown", function(event) {
        if (event.key !== "Escape") return;
        if (galeriaTelaCheia && galeriaTelaCheia.classList.contains("galeria-tela-cheia-aberta")) return fecharImagemTelaCheia();
        if (modalSaibaMais && modalSaibaMais.classList.contains("modal-saiba-mais-aberto")) {
            modalSaibaMais.classList.remove("modal-saiba-mais-aberto");
            modalSaibaMais.setAttribute("aria-hidden", "true");
            return;
        }
        fecharModalDestino();
    });
}

function configurarFormulario() {
    const formulario = document.getElementById("formulario-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    if (!formulario) return;
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }
        if (mensagemSucesso) {
            mensagemSucesso.classList.add("form-sucesso-visivel");
        }
        formulario.reset();
    });
}

function configurarFallbacksEstaticos() {
    document.querySelectorAll(".imagem-com-fallback").forEach(function(img) {
        img.addEventListener("error", function() {
            img.src = FALLBACK_IMAGEM;
        });
    });
}

renderizarHome();
renderizarTodosDestinos();
configurarFiltros();
configurarModais();
configurarFormulario();
configurarFallbacksEstaticos();

const parametros = new URLSearchParams(window.location.search);
const destinoDaUrl = parametros.get("destino");
if (destinoDaUrl && destinosInformacoes[destinoDaUrl] && modalDestino) abrirModalDestino(destinoDaUrl);

/* ========================================
   INTERAÇÕES VISUAIS DA VERSÃO ANTERIOR
   ======================================== */
// Delegação mantém o efeito nos botões e cards, inclusive nos cards renderizados depois.
document.addEventListener("mouseover", function(event) {
    const elemento = event.target.closest(".botao, .destino-card");
    if (elemento && !elemento.contains(event.relatedTarget)) {
        elemento.classList.add(elemento.matches(".botao") ? "botao-interativo" : "card-interativo");
    }
});

document.addEventListener("mouseout", function(event) {
    const elemento = event.target.closest(".botao, .destino-card");
    if (elemento && !elemento.contains(event.relatedTarget)) {
        elemento.classList.remove(elemento.matches(".botao") ? "botao-interativo" : "card-interativo");
    }
});