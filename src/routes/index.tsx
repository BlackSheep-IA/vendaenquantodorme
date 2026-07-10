import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import lizHero from "@/assets/images/liz-hero.jpeg";
import lizEsp from "@/assets/images/liz-especialista.jpeg";
import lizCrono from "@/assets/images/liz-cronograma.jpeg";
import envelope from "@/assets/images/envelope.png";
import dep01 from "@/assets/images/depoimento-liz-01.svg";
import dep02 from "@/assets/images/depoimento-liz-02.svg";
import dep03 from "@/assets/images/depoimento-liz-03.svg";
import dep04 from "@/assets/images/depoimento-liz-04.svg";
import res01 from "@/assets/images/resultado-01.svg";
import res02 from "@/assets/images/resultado-02.svg";
import res03 from "@/assets/images/resultado-03.svg";
import res04 from "@/assets/images/resultado-04.svg";
import res05 from "@/assets/images/resultado-05.svg";
import res06 from "@/assets/images/resultado-06.svg";

const DEPOIMENTOS_LIZ: { src: string; alt: string }[] = [
  { src: dep01, alt: "Depoimento sobre Liz Valz — 1" },
  { src: dep02, alt: "Depoimento sobre Liz Valz — 2" },
  { src: dep03, alt: "Depoimento sobre Liz Valz — 3" },
  { src: dep04, alt: "Depoimento sobre Liz Valz — 4" },
];
const RESULTADOS: { src: string; alt: string }[] = [
  { src: res01, alt: "Resultado de aluna — 1" },
  { src: res02, alt: "Resultado de aluna — 2" },
  { src: res03, alt: "Resultado de aluna — 3" },
  { src: res04, alt: "Resultado de aluna — 4" },
  { src: res05, alt: "Resultado de aluna — 5" },
  { src: res06, alt: "Resultado de aluna — 6" },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workshop Venda Enquanto Dorme™ — Liz Valz" },
      {
        name: "description",
        content:
          "Em 2 dias, você, Liz Valz e uma IA colocam no ar um produto digital pronto para vender todos os dias. 25 e 26 de Julho, ao vivo e online.",
      },
      { property: "og:title", content: "Workshop Venda Enquanto Dorme™ — Liz Valz" },
      {
        property: "og:description",
        content: "Crie e publique seu produto digital com IA em apenas 2 dias.",
      },
      { property: "og:image", content: lizHero },
    ],
  }),
  component: Landing,
});

const CTA_URL = "https://pay.hotmart.com/J106563190A?checkoutMode";

// Barra de progresso do lote promocional (edição manual).
// Este valor é usado tanto para a largura da barra quanto para o rótulo "%" ao lado.
const OFFER_PROGRESS = 89;


function Lock({ s = 1.5 }: { s?: number }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
function Cal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function Broadcast() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" />
    </svg>
  );
}
function Check({ c = "#fff" }: { c?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#9B7A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function CheckBordeaux() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7A1C2E"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function Ornament() {
  return (
    <div className="orn">
      <span className="orn-line" />
      <span className="orn-diamond" />
      <span className="orn-line" />
    </div>
  );
}
function CTA({
  note = true,
  hero = false,
  checkout = false,
}: {
  note?: boolean;
  hero?: boolean;
  checkout?: boolean;
}) {
  const cls = `cta cta-btn${hero ? " cta-btn--hero" : ""}`;
  const handleScroll = () => {
    if (typeof document === "undefined") return;
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={`cta-wrap${hero ? " cta-wrap--hero" : ""}`}>
      {checkout ? (
        <a className={cls} href={CTA_URL} target="_blank" rel="noopener noreferrer">
          <Lock />
          <span>GARANTIR MINHA VAGA NO LOTE 03 POR R$49,00</span>
        </a>
      ) : (
        <button type="button" className={cls} onClick={handleScroll}>
          <Lock />
          <span>GARANTIR MINHA VAGA NO LOTE 03 POR R$49,00</span>
        </button>
      )}
      {note && <div className="cta-note">🔒 Vaga garantida e acesso imediato</div>}
    </div>
  );
}

const heroChecklist = ["Oferta criada", "Funil estruturado", "IA configurada", "Mecanismo de ascensão pronto"];

function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="hero-header-inner">
        <div className="hero-label">Workshop</div>
        <div className="hero-title serif">Venda Enquanto Dorme™</div>
        <div className="badge-row">
          <div className="badge">
            <Cal />2 Dias Intensivos
          </div>
          <div className="badge">
            <Broadcast />
            Ao Vivo e Online
          </div>
          <div className="badge">
            <Lock s={1.7} />
            Vagas Limitadas
          </div>
        </div>
        <div className="event-bar">
          <span>
            <Broadcast />
            Ao vivo e online
          </span>
          <span>
            <Cal />
            25 e 26 de Julho
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <>
      <h1>Em apenas 2 dias, você, eu e uma IA vamos colocar no ar um produto que vende todos os dias.</h1>
      <div className="hero-sub">
        …e transforma seguidoras em clientes do seu <i>High Ticket</i>.
      </div>
      <div className="hero-checklist-label">Você sai da imersão com:</div>
      <ul className="hero-check-list">
        {heroChecklist.map((t) => (
          <li key={t}>
            <span className="check-circle">
              <Check />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <CTA hero />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-q faq-question" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? "×" : "+"}</span>
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

const faqs = [
  [
    "Vai ficar gravado?",
    "Sim, mas o ingresso para o Workshop ao vivo não inclui acesso às gravações.\n\nCaso deseje, você poderá adquirir separadamente as gravações completas dos 2 dias do Workshop, organizadas em formato de aulas para assistir no seu ritmo.\n\nEssa opção estará disponível durante a compra do seu ingresso ou, no máximo, até o encerramento do período de vendas das gravações.\n\nO investimento nas gravações é de R$ 497 à vista ou em até 12x de R$ 51,40.\n\nSe você deseja participar ao vivo e ainda ter a possibilidade de revisar todo o conteúdo depois, recomendamos incluir as gravações no momento da inscrição para aproveitar a experiência completa.\n\nCaso tenha qualquer dúvida, nosso time de suporte estará à disposição para ajudar pelo WhatsApp.",
  ],
  [
    "Eu já tenho produto, serve pra mim?",
    "Sim. Se você já vende, vamos reestruturar sua oferta e construir o sistema de vendas em IA por trás dela.",
  ],
  [
    "E se eu não souber usar IA?",
    "Não precisa saber nada. Eu te entrego os comandos, os modelos e fazemos tudo juntas, ao vivo, passo a passo.",
  ],
  [
    "Como eu acesso?",
    "Pelo Zoom, no link enviado por e-mail. Basta clicar e entrar — ao vivo, com todas as participantes.",
  ],
  [
    "Funciona pra minha profissão?",
    "Funciona para qualquer especialista, mentora, coach, terapeuta, consultora ou criadora que quer vender um produto digital de alto valor.",
  ],
  [
    "Preciso ter muitos seguidores?",
    "Não. O método foi desenhado para funcionar com audiências pequenas, qualificadas e engajadas — não com volume.",
  ],
  [
    "Preciso investir em anúncios pra vender?",
    "Não. Construímos um funil orgânico que funciona independente de tráfego pago. Anúncios entram como aceleração, não dependência.",
  ],
  [
    "Minha agenda é cheia, vou dar conta?",
    "Os 2 dias são intensivos justamente pra cabe em qualquer agenda: você bloqueia o fim de semana e sai com o produto pronto.",
  ],
  [
    "E se eu achar que não era pra mim?",
    "Garantia de risco zero: participou dos 2 dias, não saiu com produto pronto pra vender, devolvo 100% do valor.",
  ],
] as const;

function Landing() {
  return (
    <div className="vd">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-mobile">
          <HeroHeader />
        </div>
        {/* mobile */}
        <div className="hero-mobile">
          <div className="hero-media">
            <img src={lizHero} alt="Liz Valz" />
            <div className="hero-media-fade-side" />
            <div className="hero-media-fade-bottom" />
            <div className="hero-overlay-text">
              <h1>Em apenas 2 dias, você, eu e uma IA vamos colocar no ar um produto que vende todos os dias.</h1>
              <p className="hero-sub">
                …e transformar seguidoras em clientes do seu <i>High Ticket</i>.
              </p>
            </div>
          </div>
          <div className="hero-content">
            <div className="hero-checklist-label">Você sai da imersão com:</div>
            <ul className="hero-check-list">
              {heroChecklist.map((t) => (
                <li key={t}>
                  <span className="check-circle">
                    <Check />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <CTA hero />
          </div>
        </div>
        {/* desktop */}
        <div className="container">
          <div className="hero-desktop">
            <div className="hero-left">
              <HeroHeader />
              <div style={{ marginTop: 18 }}>
                <HeroContent />
              </div>
            </div>
            <div className="hero-right">
              <img src={lizHero} alt="Liz Valz" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="metrics">
            <div className="metric">
              <div className="metric-val">5.200+</div>
              <div className="metric-lbl">Alunas formadas</div>
            </div>
            <div className="metric">
              <div className="metric-val">97%</div>
              <div className="metric-lbl">Aprovação</div>
            </div>
            <div className="metric">
              <div className="metric-val">R$49,00</div>
              <div className="metric-lbl">Lote 03</div>
            </div>
            <div className="metric">
              <div className="metric-val">2 dias</div>
              <div className="metric-lbl">Produto no ar</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 2 — OBJEÇÃO */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow">Talvez você esteja pensando</div>
          <Ornament />
          <div style={{ textAlign: "center" }} className="quote-mark">
            "
          </div>
          <div className="quote">
            Eu já paguei caro em mentorias e continuei me virando sozinha, sem sair do lugar. Por que com você seria
            diferente?
          </div>
          <p className="answer-p">
            Porque nas outras você recebeu informação. <strong>Aqui você constrói o ativo.</strong> Existe uma diferença
            enorme entre assistir alguém explicando uma estratégia e sair com ela funcionando.
          </p>
          <img src={envelope} alt="Você sai com um produto pronto para vender" className="envelope" />
          <div className="compare">
            <div className="compare-card">
              <div className="compare-head left">O que normalmente acontece</div>
              <ul className="compare-list">
                {[
                  "Você assiste às aulas",
                  "Faz anotações",
                  "Sai inspirada",
                  "Volta para a rotina",
                  "Adia a execução",
                ].map((t) => (
                  <li key={t}>
                    <XIcon />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare-card">
              <div className="compare-head right">O que acontece no Workshop</div>
              <ul className="compare-list">
                {[
                  "Você cria sua oferta",
                  "Estrutura seu funil",
                  "Configura suas IAs",
                  "Publica durante o evento",
                  "Sai com produto pronto",
                ].map((t) => (
                  <li key={t}>
                    <CheckBordeaux />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A ESPECIALISTA */}
      <section className="section bg-cream">
        <div className="container">
          <div className="esp-layout">
            <div className="esp-photo">
              <img src={lizEsp} alt="Liz Valz" />
            </div>
            <div>
              <div className="eyebrow">A especialista</div>
              <Ornament />
              <h2
                className="serif section-title"
                style={{
                  textAlign: "center",
                  fontSize: "clamp(28px,5vw,36px)",
                  fontWeight: 400,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                Quem é <em style={{ color: "var(--bordeaux)", fontStyle: "normal" }}>Liz Valz</em>?
              </h2>
              <div className="highlight-card">
                <span className="sol-icon">✦</span>
                <p>
                  Eu construí um negócio digital que me permite trabalhar com liberdade, ter previsibilidade e manter
                  uma rotina alinhada com a vida que escolhi viver.
                </p>
              </div>
              <ul className="creds">
                <li>
                  <span className="cred-icon">▲</span>
                  <span>
                    Mais de <strong>25 milhões</strong> faturados
                  </span>
                </li>
                <li>
                  <span className="cred-icon">✦</span>
                  <span>
                    Criadora do <strong>Sistema de Vendas Invisíveis™</strong>
                  </span>
                </li>
                <li>
                  <span className="cred-icon">↗</span>
                  <span>
                    Criadora da <strong>Aceleradora High Ticket IA</strong>
                  </span>
                </li>
                <li>
                  <span className="cred-icon">♥</span>
                  <span>
                    Milhares de <strong>mulheres impactadas</strong>
                  </span>
                </li>
                <li>
                  <span className="cred-icon">★</span>
                  <span>
                    Dezenas de alunas com <strong>faturamentos expressivos</strong>
                  </span>
                </li>
              </ul>
              <div className="esp-quote">Eu ensino apenas aquilo que vivo diariamente.</div>
            </div>
          </div>
        </div>
      </section>

      {/* O CAMINHO */}
      <section className="section bg-cream-dk">
        <div className="container">
          <div className="eyebrow">O caminho</div>
          <Ornament />
          <h2
            className="serif section-title"
            style={{
              textAlign: "center",
              fontSize: "clamp(24px,5vw,34px)",
              fontWeight: 400,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            Um sistema que vende <em style={{ color: "var(--bordeaux)" }}>enquanto você dorme</em>
          </h2>
          <ul className="solutions">
            <li>
              <span className="sol-icon">1</span>
              <div className="sol-text">
                Você cria uma <strong>oferta High Ticket</strong> com posicionamento claro e mecanismo único.
              </div>
            </li>
            <li>
              <span className="sol-icon">2</span>
              <div className="sol-text">
                Estrutura um <strong>funil perpétuo</strong> que converte seguidoras em clientes sem call.
              </div>
            </li>
            <li>
              <span className="sol-icon">3</span>
              <div className="sol-text">
                Configura as <strong>IAs de vendas</strong> que respondem, qualificam e fecham por você.
              </div>
            </li>
            <li>
              <span className="sol-icon">★</span>
              <div className="sol-text">
                Ativa o <strong>mecanismo de ascensão</strong> que aumenta o ticket dentro do seu próprio ecossistema.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* O QUE VAMOS CONSTRUIR */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow">O que vamos construir</div>
          <Ornament />
          <h2
            className="serif section-title"
            style={{
              textAlign: "center",
              fontSize: "clamp(26px,5vw,36px)",
              fontWeight: 400,
              margin: 0,
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            O que vamos construir juntas <em style={{ fontStyle: "italic" }}>utilizando IA</em> nesses 2 dias
          </h2>
          <div className="day-cards">
            <div className="day-card">
              <div className="day-head">
                <div className="day-icon">
                  <Cal />
                </div>
                <div className="day-title">Dia 1 — Sábado</div>
                <div className="day-hours">09h às 18h</div>
              </div>
              <ul className="day-list">
                <li>
                  <span className="day-item-icon">◆</span>Criação do produto.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Estruturação da oferta.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Página pronta.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Checkout pronto.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Produto preparado para vender.
                </li>
              </ul>
              <div className="day-result">
                <div className="day-result-lbl">Ao final do Dia 1</div>
                <div className="day-result-text">Produto publicado e pronto para receber vendas.</div>
              </div>
            </div>
            <div className="day-card">
              <div className="day-head">
                <div className="day-icon">
                  <Broadcast />
                </div>
                <div className="day-title">Dia 2 — Domingo</div>
                <div className="day-hours">09h às 18h</div>
              </div>
              <ul className="day-list">
                <li>
                  <span className="day-item-icon">◆</span>Estruturação do funil.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Automação.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Mecanismo de ascensão.
                </li>
                <li>
                  <span className="day-item-icon">◆</span>Posicionamento da oferta principal.
                </li>
              </ul>
              <div className="day-result">
                <div className="day-result-lbl">Ao final do Dia 2</div>
                <div className="day-result-text">Sistema completo funcionando.</div>
              </div>
            </div>
          </div>
          <div className="final-note">
            <div className="final-note-icon">
              <Lock s={1.7} />
            </div>
            <p>É só o começo da sua nova vida. Vamos construir juntas.</p>
          </div>
          <CTA />
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="section bg-cream-dk">
        <div className="container">
          <div className="crono-layout">
            <div>
              <div className="crono-photo">
                <img src={lizCrono} alt="Liz Valz" />
              </div>
            </div>
            <div>
              <div className="eyebrow">Cronograma</div>
              <Ornament />
              <h2
                className="serif section-title"
                style={{
                  textAlign: "center",
                  fontSize: "clamp(28px,5vw,38px)",
                  fontWeight: 400,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                Como vai funcionar
              </h2>
              <div className="timeline">
                <div className="tl-card">
                  <div className="tl-date">
                    <div className="tl-date-d">
                      25 de
                      <br />
                      julho
                    </div>
                    <div className="tl-date-h">09h às 18h</div>
                  </div>
                  <ul className="tl-items">
                    <li>
                      <span className="day-item-icon">◆</span>Criação do produto utilizando IA.
                    </li>
                    <li>
                      <span className="day-item-icon">◆</span>Páginas e checkout publicados.
                    </li>
                    <li>
                      <span className="day-item-icon">◆</span>Produto preparado para vender.
                    </li>
                  </ul>
                </div>
                <div className="tl-card">
                  <div className="tl-date">
                    <div className="tl-date-d">
                      26 de
                      <br />
                      julho
                    </div>
                    <div className="tl-date-h">09h às 18h</div>
                  </div>
                  <ul className="tl-items">
                    <li>
                      <span className="day-item-icon">◆</span>Estruturação do sistema de vendas.
                    </li>
                    <li>
                      <span className="day-item-icon">◆</span>Mecanismo de ascensão.
                    </li>
                    <li>
                      <span className="day-item-icon">◆</span>Automações.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="section bg-cream-dk">
        <div className="container offer-head">
          <div className="eyebrow">Oferta</div>
          <Ornament />
          <h2 className="section-title">Você não precisa mais depender da própria agenda para vender.</h2>
          <p>
            Enquanto outras pessoas continuam buscando clientes diariamente, você começa a construir um ativo que
            continua trabalhando depois que o evento termina.
          </p>
          <div className="pricing">
            <div className="price-lbl">Você recebe</div>
            <div className="orn">
              <span className="orn-line" />
              <span className="orn-diamond" />
              <span className="orn-line" />
            </div>
            <ul className="benefits">
              {[
                "Acesso aos 2 dias ao vivo",
                "Estrutura completa do produto",
                "Estrutura do funil",
                "Configuração com IA",
                "Modelos do workshop",
                "Sessões de dúvidas ao vivo",
              ].map((b) => (
                <li key={b}>
                  <span className="check-circle">
                    <Check />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <hr className="divider-gold" />
            <div className="price-sep">
              <span className="orn-diamond" />
            </div>
            <div className="offer-promo">
              <div className="offer-promo-from">
                {"\n"} <span className="offer-promo-from-value"></span>
              </div>
              <div className="offer-promo-to">
                De&nbsp;R$ 499&nbsp;
              </div>
              <div className="offer-promo-lbl">{"\n"}</div>
            </div>
            <div className="offer-progress">
              <div className="offer-progress-text">GARANTA SUA VAGA NO LOTE PROMOCIONAL</div>
              <div className="offer-progress-row">
                <div className="offer-progress-track">
                  <div className="offer-progress-fill" style={{ width: `${OFFER_PROGRESS}%` }} />
                </div>
                <div className="offer-progress-pct">{OFFER_PROGRESS}%</div>
              </div>
            </div>
            <div className="price-lbl">POR APENAS</div>
            <div className="price-amount">R$ 49,00</div>
            <CTA checkout />
          </div>
        </div>
      </section>


      {/* DOBRA 8 — GARANTIA */}
      <section className="section bg-cream">
        <div className="container guarantee">
          <div className="eyebrow">Garantia</div>
          <Ornament />
          <h2 className="section-title">
            Seu produto publicado ou seu <em>dinheiro de volta</em>
          </h2>
          <Ornament />
          <p>
            Eu confio tanto no processo que, se você participar dos 2 dias ao vivo e não sair com o seu produto no ar,
            pronto pra vender, eu devolvo <strong style={{ color: "var(--bordeaux)" }}>100% do valor</strong>.
          </p>
          <div className="shield">
            <div className="shield-circle">
              <svg viewBox="0 0 24 24">
                <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <span className="orn-diamond" style={{ background: "var(--gold)", opacity: 0.5 }} />
            <div className="shield-label">Risco zero</div>
            <div className="shield-sub">Compromisso com o seu resultado.</div>
          </div>
        </div>
      </section>

      {/* DOBRA 9 — FAQ */}
      <section className="section bg-cream-dk">
        <div className="container">
          <div className="eyebrow">Perguntas frequentes</div>
          <Ornament />
          <h2
            className="serif section-title"
            style={{
              textAlign: "center",
              fontSize: "clamp(26px,5vw,34px)",
              fontWeight: 400,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            Ainda tem dúvidas?
          </h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 10 — FECHAMENTO */}
      <section className="section bg-cream-dk">
        <div className="container closing">
          <Ornament />
          <h2>Dois dias. Um produto. Uma nova forma de vender.</h2>
          <div className="eyebrow">25 e 26 de Julho — Ao Vivo e Online</div>
          <div className="closing-badges">
            <span>2 Dias</span>
            <span>Ao Vivo</span>
            <span>R$49,00</span>
          </div>
          <p>
            As vagas do lote 03 são limitadas e se encerram em breve. Garanta a sua agora e construa, em apenas um fim
            de semana, o ativo digital que vai vender por você todos os dias.
          </p>
          <CTA />
          <div className="closing-note">Vagas do lote 03 se encerram em breve.</div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2025 Liz Valz · Workshop Venda Enquanto Dorme™
          <br />
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
