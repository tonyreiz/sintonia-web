function iniciarRotacaoDeTexto(elementId, palavras, intervalo) {
  const elemento = document.getElementById(elementId);

  if (!elemento || !Array.isArray(palavras) || palavras.length === 0) {
    return;
  }

  let indiceAtual = 0;
  elemento.textContent = palavras[indiceAtual];

  window.setInterval(() => {
    indiceAtual = (indiceAtual + 1) % palavras.length;
    elemento.textContent = palavras[indiceAtual];
  }, intervalo);
}

iniciarRotacaoDeTexto(
  "random",
  [
    "- Sites e Landing Pages profissionais",
    "- Soluções digitais para o seu negócio",
    "- Desenvolvido para trazer resultados",
    "- Responsividade para os dispositivos",
  ],
  20000
);

iniciarRotacaoDeTexto(
  "random2",
  [
    "- O Design exclusivo e personalizado",
    "- Seus layouts modernos e responsivos",
    "- Identidade visual para sua empresa",
    "- Criando uma navegação envolvente",
  ],
  20000
);

iniciarRotacaoDeTexto(
  "random3",
  [
    "- Desenvolvido nas suas preferências",
    "- Soluções sob medida para a marca",
    "- Funções personalizadas e animadas",
    "- Projetos adaptados ao seu negócio",
  ],
  20000
);

iniciarRotacaoDeTexto(
  "random4",
  [
    "- Ganhe mais clientes através da web",
    "- Estratégia que faz você crescer na web",
    "- Resultado incrível para a sua empresa",
    "- Aumente o faturamento online",
  ],
  20000
);

iniciarRotacaoDeTexto(
  "random5",
  [
    "- Maior alcance para os seus clientes",
    "- A sua marca estará conectada online",
    "- Destaque digital para seus projetos",
    "- Aumente a visibilidade e o alcance",
  ],
  25000
);

iniciarRotacaoDeTexto(
  "random6",
  [
    "- Suporte dedicado aos seus clientes",
    "- Com um atendimento personalizado",
    "- Tenha ajuda focada na sua empresa",
    "- Com suporte técnico especializado",
  ],
  25000
);

iniciarRotacaoDeTexto(
  "random7",
  [
    "- Uma tecnologia de ponta para o site",
    "- Com recursos modernos e eficientes",
    "- Inovações geniais para seu projeto",
    "- Com soluções digitais avançadas",
  ],
  25000
);

iniciarRotacaoDeTexto(
  "random8",
  [
    "- Capte mais a atenção dos visitantes",
    "- Obtenha mais públicos interessados",
    "- Inove e conquiste mais clientes online",
    "- Crie mais conexão com seu público",
  ],
  25000
);

// Evita que placeholders temporários comecem a rolar a página para o topo.
document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
  });
});

// Chat simples: evita erro no chat.html enquanto a integração real não existe.
function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const status = document.getElementById("status");
  const historic = document.getElementById("historic");

  if (!messageInput || !status || !historic) {
    return;
  }

  const texto = messageInput.value.trim();

  if (!texto) {
    messageInput.style.border = "1px solid red";
    status.textContent = "Digite uma pergunta antes de enviar.";
    return;
  }

  messageInput.style.border = "";

  const mensagem = document.createElement("p");
  mensagem.textContent = `Você: ${texto}`;
  historic.appendChild(mensagem);

  status.textContent =
    "Mensagem registrada localmente. Integração do chat ainda não foi conectada.";
  messageInput.value = "";
}

window.sendMessage = sendMessage;

const chatMessageInput = document.getElementById("message-input");

if (chatMessageInput) {
  chatMessageInput.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      sendMessage();
    }
  });
}

const botoesModal = document.querySelectorAll("[data-modal]");

botoesModal.forEach((botao) => {
  botao.addEventListener("click", () => {
    const modalId = botao.getAttribute("data-modal");
    const modal = modalId ? document.getElementById(modalId) : null;

    if (modal && typeof modal.showModal === "function") {
      modal.botaoOrigem = botao;
      modal.showModal();
    }
  });
});

const botoesFechar = document.querySelectorAll(".fechar-modal");

botoesFechar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const modal = botao.closest("dialog");

    if (modal) {
      modal.close();
    }
  });
});

const modais = document.querySelectorAll("dialog");

modais.forEach((modal) => {
  modal.addEventListener("click", (evento) => {
    const areaConteudo = modal.querySelector(".modal-equipe-conteudo");

    if (areaConteudo && !areaConteudo.contains(evento.target)) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => {
    if (modal.botaoOrigem instanceof HTMLElement) {
      modal.botaoOrigem.blur();
    }
  });
});

const timelineProcesso = document.querySelector("[data-processo-site]");

if (timelineProcesso) {
  const etapasProcesso = Array.from(
    timelineProcesso.querySelectorAll(".processo-site-etapa")
  );
  const painelProcesso = timelineProcesso.querySelector(".processo-site-painel");
  const numeroProcesso = timelineProcesso.querySelector(
    ".processo-site-painel-numero"
  );
  const tituloProcesso = timelineProcesso.querySelector(
    ".processo-site-painel-titulo"
  );
  const textoProcesso = timelineProcesso.querySelector(
    ".processo-site-painel-texto"
  );

  if (
    etapasProcesso.length &&
    painelProcesso &&
    numeroProcesso &&
    tituloProcesso &&
    textoProcesso
  ) {
    const intervaloAutoplay = 4000;
    let indiceEtapaAtual = 0;
    let autoplayTimelineId;

    const mudarEtapa = (indiceAtivo) => {
      indiceEtapaAtual = indiceAtivo;

      const totalEtapas = etapasProcesso.length;
      const percentual =
        totalEtapas > 1 ? (indiceAtivo / (totalEtapas - 1)) * 80 : 0;
      const etapaAtual = etapasProcesso[indiceAtivo];

      timelineProcesso.style.setProperty(
        "--processo-progresso",
        `${percentual}%`
      );
      timelineProcesso.style.setProperty("--processo-foguete", `${percentual}%`);

      etapasProcesso.forEach((etapa, indice) => {
        const estaAtiva = indice === indiceAtivo;
        const concluida = indice < indiceAtivo;

        etapa.classList.toggle("is-active", estaAtiva);
        etapa.classList.toggle("is-concluida", concluida);
        etapa.setAttribute("aria-selected", String(estaAtiva));
        etapa.setAttribute("tabindex", estaAtiva ? "0" : "-1");
      });

      if (!etapaAtual) {
        return;
      }

      painelProcesso.classList.add("is-trocando");
      painelProcesso.setAttribute("aria-labelledby", etapaAtual.id);

      window.setTimeout(() => {
        numeroProcesso.textContent = etapaAtual.dataset.numero || "";
        tituloProcesso.textContent = etapaAtual.dataset.titulo || "";
        textoProcesso.textContent = etapaAtual.dataset.texto || "";
        painelProcesso.classList.remove("is-trocando");
      }, 120);
    };

    const proximaEtapa = () => {
      const proximoIndice =
        indiceEtapaAtual === etapasProcesso.length - 1
          ? 0
          : indiceEtapaAtual + 1;

      mudarEtapa(proximoIndice);
    };

    const reiniciarAutoplayTimeline = () => {
      window.clearInterval(autoplayTimelineId);
      autoplayTimelineId = window.setInterval(proximaEtapa, intervaloAutoplay);
    };

    etapasProcesso.forEach((etapa, indice) => {
      etapa.addEventListener("click", () => {
        mudarEtapa(indice);
        reiniciarAutoplayTimeline();
      });

      etapa.addEventListener("keydown", (evento) => {
        let proximoIndice = indice;

        if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
          proximoIndice = indice === etapasProcesso.length - 1 ? 0 : indice + 1;
        }

        if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
          proximoIndice = indice === 0 ? etapasProcesso.length - 1 : indice - 1;
        }

        if (proximoIndice !== indice) {
          evento.preventDefault();
          etapasProcesso[proximoIndice].focus();
          mudarEtapa(proximoIndice);
          reiniciarAutoplayTimeline();
        }
      });
    });

    mudarEtapa(0);
    reiniciarAutoplayTimeline();
  }
}

const faqContainer = document.querySelector(".accordion-container");

if (faqContainer && typeof window.Accordion === "function") {
  new Accordion(".accordion-container");
}

const carrossel = document.querySelector(".carrossel");

if (carrossel && window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
  const $carrossel = window.jQuery(carrossel);

  if (!$carrossel.hasClass("slick-initialized")) {
    $carrossel.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
}


const depoimento = document.querySelector(".depoimento");

if (depoimento && window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
  const $depoimento = window.jQuery(depoimento);

  if (!$depoimento.hasClass("slick-initialized")) {
    $depoimento.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
}
