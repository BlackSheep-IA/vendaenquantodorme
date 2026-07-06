import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import lizHero from "@/assets/images/liz-hero.jpeg";
import lizEsp from "@/assets/images/liz-especialista.jpeg";
import lizCrono from "@/assets/images/liz-cronograma.jpeg";
import envelope from "@/assets/images/envelope.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Workshop Venda Enquanto Dorme™ — Liz Valz",
      },
      {
        name: "description",
        content:
          "Em 2 dias, você, Liz Valz e uma IA colocam no ar um produto digital pronto para vender todos os dias. 25 e 26 de Julho, ao vivo e online.",
      },
      {
        property: "og:title",
        content: "Workshop Venda Enquanto Dorme™ — Liz Valz",
      },
      {
        property: "og:description",
        content: "Crie e publique seu produto digital com IA em apenas 2 dias.",
      },
      {
        property: "og:image",
        content: lizHero,
      },
    ],
  }),
  component: Landing,
});

const CTA_URL = "https://pay.hotmart.com/J106563190A?checkoutMode=10";

function Lock({ s = 1.5 }: { s?: number }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={s} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
function Cal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function Broadcast() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" /><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" />
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
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function CheckBordeaux() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7A1C2E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function Ornament() {
  return (
    <div className="orn">
      <span className="orn-line" /><span className="orn-diamond" /><span className="orn-line" />
    </div>
  );
}
function CTA({ note = true, hero = false }: { note?: boolean; hero?: boolean }) {
  return (
    <div className={`cta-wrap${hero ? " cta-wrap--hero" : ""}`}>
      <a
        className={`cta cta-btn${hero ? " cta-btn--hero" : ""}`}
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Lock />
        <span>GARANTIR MINHA VAGA NO LOTE 03 POR R$49,00</span>
      </a>
      {note && <div className="cta-note">🔒 Vaga garantida e acesso imediato</div>}
    </div>
  );
}

const heroChecklist = ["Oferta criada", "Funil estruturado", "IA configurada", "Mecanismo de ascensão pronto"];

const heroVariants = {
  1: {
    h1: "Em apenas 2 dias, você, eu e uma IA vamos colocar no ar um produto que vende todos os dias.",
    h2: (
      <>
        …e transformar seguidoras em clientes do seu <i>High&nbsp;Ticket</i>.
      </>
    ),
  },

  2: {
    h1: "Em 2 dias, eu e minhas IAs vamos criar com você um curso que vende no automático todo dia.",
    h2: (
      <>
        <span className="hero-sub-top">
          E ainda leva suas alunas pro seu
          <br />
          <i>High Ticket!</i>
        </span>
    
        <div className="hero-sub-bottom">
  Copie o funil que me gera mais de 100 mil enquanto durmo.
</div>
      </>
    ),
  },

  3: {
    h1: "Em 2 dias, eu e minhas IAs vamos criar com você um curso que vende no automático todo dia — e conduz naturalmente suas alunas para compra do seu High Ticket.",
    h2: (
      <>
        Comigo do seu lado te mostrando passo por passo desse funil que me gera 120-200k previsíveis mensais enquanto durmo.
      </>
    ),
  },
};


const HERO_H1 = heroVariants[2].h1;
const HERO_SUBTITLE = heroVariants[2].h2;

function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="hero-header-inner">
        <div className="hero-label">Workshop</div>
        <div className="hero-title serif">Venda Enquanto Dorme™</div>
        <div className="badge-row">
          <div className="badge"><Cal />2 Dias Intensivos</div>
          <div className="badge"><Broadcast />Ao Vivo e Online</div>
          <div className="badge"><Lock s={1.7} />Vagas Limitadas</div>
        </div>
        <div className="event-bar">
          <span><Cal />25 e 26 de Julho</span>
        </div>
      </div>
    </div>
  );
}

function HeroContent({ showChecklist = true }: { showChecklist?: boolean }) {
  return (
  
    <>
      <h1>{HERO_H1}</h1>
      <div className="hero-sub">{HERO_SUBTITLE}</div>
      <div className="hero-checklist-label">Você sai da imersão com:</div>
      <ul className="hero-check-list">
        {heroChecklist.map((t) => (
          <li key={t}>
            <span className="check-circle"><Check /></span>
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
  ["Vai ficar gravado?", "Sim. Todas as participantes têm acesso à gravação completa dos 2 dias por tempo determinado para revisar e implementar com calma."],
  ["Eu já tenho produto, serve pra mim?", "Serve mais ainda, porque aqui você cria o produto que vende sozinho e ainda vende a sua mentoria por você, que é justamente o que falta no que você já tem."],
  ["E se eu não souber usar IA?", "Não precisa saber nada. Eu te entrego os comandos, os modelos e fazemos tudo juntas, ao vivo, passo a passo."],
  ["Como eu acesso?", "Depois da compra você recebe o link por e-mail e WhatsApp, é tudo online e ao vivo nos dois dias."],
  ["Funciona pra minha profissão?", "Funciona pra qualquer uma que vende conhecimento ou serviço, de médica a advogada, porque o produto nasce do que você já domina."],
  ["Preciso ter muitos seguidores?", "Não, o produto foi feito pra vender até pra quem ainda nem te segue, então o tamanho do seu perfil não decide a sua venda."],
  ["Preciso investir em anúncios pra vender?", "Não. Construímos um funil orgânico que funciona independente de tráfego pago. Anúncios entram como aceleração, não dependência."],
  ["Minha agenda é cheia, vou dar conta?", "Os 2 dias são intensivos justamente pra cabe em qualquer agenda: você bloqueia o fim de semana e sai com o produto pronto."],
  ["E se eu achar que não era pra mim?", "Você tem garantia: se terminar os dois dias sem o produto no ar, eu te devolvo tudo."],
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
              <h1>{HERO_H1}</h1>
              <p className="hero-sub">{HERO_SUBTITLE}</p>
            </div>
          </div>
          <div className="hero-content">
  {HERO_H1 === heroVariants[1].h1 && (
    <>
      <div className="hero-checklist-label">
        Você sai da imersão com:
      </div>

      <ul className="hero-check-list">
        {heroChecklist.map((t) => (
          <li key={t}>
            <span className="check-circle"><Check /></span>
            {t}
          </li>
        ))}
      </ul>
    </>
  )}

  <CTA hero />
</div>
        </div>
        {/* desktop */}
        <div className="container">
          <div className="hero-desktop">
            <div className="hero-left">
              <HeroHeader />
              <div style={{ marginTop: 15 }}>
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
      Eu já paguei caro em mentorias e continuei me virando sozinha,
      sem sair do lugar. 
  <br />
  Por que com você seria diferente? 
    </div>

    <p className="answer-p">
      A diferença é simples: nas outras, você assistiu aula e teve que
      se virar sozinha.{" "}
      <strong>
        Aqui não tem aula pra assistir, é uma oficina ao vivo, na
        prática, comigo do seu lado, usando minhas IAs para construir
        seu produto na sua frente até ele entrar no ar.
      </strong>
    </p>

    <img
      src={envelope}
      alt="Você sai com um produto pronto para vender"
      className="envelope"
    />

<div className="compare-card">
<div
  className="compare-head right"
  style={{ fontSize: "14px" }}
>
  O que a gente constrói não depende mais de você
</div>

  <div
    style={{
      padding: "24px",
      lineHeight: 1.4,
      color: "var(--ink)",
      textAlign: "center",
    }}
  >
    É algo que se vende sozinho todo dia e leva gente aquecida para dentro da sua mentoria, sem você ficar feito vendedora chata.

    <br />
    <br />

    Por isso, dessa vez, eu te garanto que finalmente vai sair do lugar.
  </div>
</div>
      </div>
</section>

      {/* DOBRA 3 — O CAMINHO */}
      <section className="section bg-cream-dk">
        <div className="container">
          <div className="eyebrow">O caminho</div>
          <Ornament />
          <h2 className="serif" style={{ textAlign: "center", fontSize: "clamp(24px,5vw,34px)", fontWeight: 400, margin: 0, color: "var(--ink)" }}>
            Trabalhar mais não vai te tirar do lugar. <em style={{ color: "var(--bordeaux)" }}>Um produto que venda enquanto você dorme, sim!</em>
          </h2>
          <ul className="solutions">
  <li>
    <span className="sol-icon">1</span>
    <div className="sol-text">
      Você continua refém de <strong>atender 1x1 e vender a própria hora</strong>, com um caixa imprevisível todo mês.
    </div>
  </li>

  <li>
    <span className="sol-icon">2</span>
    <div className="sol-text">
      Escalar não é <strong>dar mais plantão, lotar mais a agenda ou gravar mais um curso</strong>. É parar de ser você o produto.
    </div>
  </li>

  <li>
    <span className="sol-icon">3</span>
    <div className="sol-text">
      Enquanto cada venda depende de você aparecer, atender e convencer, <strong>sua renda é limitada ao tamanho do seu dia.</strong>
    </div>
  </li>

  <li>
    <span className="sol-icon">★</span>
    <div className="sol-text">
      <strong>É esse sistema que separa quem vive de agenda lotada de quem não é escravo do tempo para aumentar sua renda.</strong>
    </div>
  </li>
</ul>
        </div>
      </section>

      {/* DOBRA 4 — O QUE VAMOS CONSTRUIR */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow">O que vamos construir</div>
          <Ornament />
          <h2 className="serif" style={{ textAlign: "center", fontSize: "clamp(26px,5vw,36px)", fontWeight: 400, margin: 0, color: "var(--ink)", lineHeight: 1.2 }}>
            O que vamos construir juntas <em style={{ fontStyle: "italic" }}>utilizando IA</em> nesses 2 dias
          </h2>
          <div className="day-cards">
            <div className="day-card">
              <div className="day-head">
                <div className="day-icon"><Cal /></div>
                <div className="day-title">Dia 1 — Sábado</div>
                <div className="day-hours">09h às 18h</div>
              </div>
              <ul className="day-list">
  <li>
    <span className="day-item-icon">◆</span>
    Vamos empacotar o seu conhecimento em um produto curativo de entrada (low ticket).
  </li>

  <li>
    <span className="day-item-icon">◆</span>
    Vamos entender como atrair pessoas ultra qualificadas, que compram antes mesmo de te seguir.
  </li>

  <li>
    <span className="day-item-icon">◆</span>
    Vamos sair com a página desse produto pronta para vender no seu link da bio.
  </li>
</ul>

<div className="day-result">
  <div className="day-result-lbl">No fim do Dia 1</div>
  <div className="day-result-text">
    Você sai com um produto que vende no automático + página de vendas prontos.
  </div>
</div>
            </div>
            <div className="day-card">
              <div className="day-head">
                <div className="day-icon"><Broadcast /></div>
                <div className="day-title">Dia 2 — Domingo</div>
                <div className="day-hours">09h às 18h</div>
              </div>
              <ul className="day-list">
  <li>
    <span className="day-item-icon">◆</span>
    Vamos entender como ascender essas pessoas para o seu High Ticket, seja ele uma mentoria ou um serviço.
  </li>

  <li>
    <span className="day-item-icon">◆</span>
    Vamos gerar desejo para que essas pessoas venham atrás de você, sem precisar morar em sessão estratégica ou virar vendedora chata.
  </li>
</ul>

<div className="day-result">
  <div className="day-result-lbl">No fim do Dia 2</div>
  <div className="day-result-text">
   Você vai dominar o exato funil que faz suas mentorias se venderem sozinhas.
  </div>
</div>
            </div>
          </div>
          <div className="final-note">
  <div className="final-note-icon">⚡</div>
  <p style={{ fontWeight: 700 }}>
    Low Ticket e High Ticket vendendo sozinhos num sistema previsível.
  </p>
</div>
          <CTA />
        </div>
      </section>

      {/* DOBRA 5 — CRONOGRAMA */}
      <section className="section bg-cream-dk">
        <div className="container">
          <div className="crono-layout">
            <div>
              <div className="crono-photo"><img src={lizCrono} alt="Liz Valz" /></div>
            </div>
            <div>
              <div className="eyebrow">Cronograma</div>
              <Ornament />
              <h2 className="serif" style={{ textAlign: "center", fontSize: "clamp(28px,5vw,38px)", fontWeight: 400, margin: 0, color: "var(--ink)" }}>
                Como vai funcionar
              </h2>
              <div className="timeline">
                <div className="tl-card">
                  <div className="tl-date">
                    <div className="tl-date-d">25 de<br/>julho</div>
                    <div className="tl-date-h">09h às 18h</div>
                  </div>
                  <ul className="tl-items">
                    <li><span className="day-item-icon">◆</span>Criação do produto utilizando IA.</li>
                    <li><span className="day-item-icon">◆</span>Páginas e checkout publicados.</li>
                    <li><span className="day-item-icon">◆</span>Produto preparado para vender.</li>
                  </ul>
                </div>
                <div className="tl-card">
                  <div className="tl-date">
                    <div className="tl-date-d">26 de<br/>julho</div>
                    <div className="tl-date-h">09h às 18h</div>
                  </div>
                  <ul className="tl-items">
                    <li><span className="day-item-icon">◆</span>Estruturação do sistema de vendas.</li>
                    <li><span className="day-item-icon">◆</span>Mecanismo de ascensão.</li>
                    <li><span className="day-item-icon">◆</span>Automações.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 — OFERTA */}
      <section className="section bg-cream-dk">
        <div className="container offer-head">
          <div className="eyebrow">Oferta</div>
          <Ornament />
          <h2>Você não precisa mais caçar clientes, prospectar na DM ou implorar vendas</h2>

<p>
  Mandar DM, depender de indicação e convencer quem não quer comprar.
  Isso é o que te esgota e é justamente o que os programas caros do mercado ensinam.

  <br /><br />

  Aqui a lógica se inverte: seu produto gera o desejo e o cliente certo chega querendo comprar. Seu High Ticket se vende dentro dele.

  <br /><br />

  <strong>Tudo isso sai por menos do pãozinho que você busca todo dia na padaria.</strong>

  <br />

  <strong>A conta é simples:</strong> a primeira venda já paga o ingresso. O resto é lucro entrando todo dia, no automático.
</p>
          <div className="pricing">
            <div className="price-lbl">Você recebe</div>
            <div className="orn"><span className="orn-line" /><span className="orn-diamond" /><span className="orn-line" /></div>
            <ul className="benefits">
              {["Acesso aos 2 dias ao vivo", "Agentes de IA prontos para criar seu produto", "Modelos de página e de checkout", "Eu montando tudo ao vivo com você", "Sessões de dúvidas ao vivo"].map((b) => (
                <li key={b}><span className="check-circle"><Check /></span>{b}</li>
              ))}
            </ul>
            <hr className="divider-gold" />
            <div className="price-sep"><span className="orn-diamond" /></div>
            <div className="price-lbl">Investimento — Lote 03</div>
            <div className="price-amount">R$ 49,00</div>
            <CTA />
          </div>
        </div>
      </section>

      {/* DOBRA 7 — LIZ VALZ */}
      <section className="section bg-cream">
        <div className="container">
          <div className="esp-layout">
            <div className="esp-photo"><img src={lizEsp} alt="Liz Valz" /></div>
            <div>
              <div className="eyebrow">A especialista</div>
              <Ornament />
              <h2 className="serif" style={{ textAlign: "center", fontSize: "clamp(28px,5vw,36px)", fontWeight: 400, margin: 0, color: "var(--ink)" }}>
                Quem é <em style={{ color: "var(--bordeaux)", fontStyle: "normal" }}>Liz Valz</em>?
              </h2>
              <div className="highlight-card">
                <span className="sol-icon">✦</span>
                <p>Trabalho de casa há 7 anos, perto dos meus filhos, com um negócio de 6 dígitos por mês e atendendo apenas às segundas-feiras.

E se você chegou até aqui, é porque também quer ganhar bem sem abrir mão dos seus dias, fazendo o que ama.</p>
              </div>
              <ul className="creds">
                <li><span className="cred-icon">▲</span><span>Construí um negócio de <strong>25 milhões</strong> faturados</span></li>
                <li><span className="cred-icon">✦</span><span>Sou criadora do <strong>Sistema de Vendas Invisíveis™</strong></span></li>
                <li><span className="cred-icon">↗</span><span>Criadora da <strong>Aceleradora High Ticket IA</strong></span></li>
                <li><span className="cred-icon">♥</span><span>Mais de 17mil <strong>mulheres impactadas</strong></span></li>
                <li><span className="cred-icon">★</span><span>Dezenas de alunas com <strong>faturamentos expressivos</strong></span></li>
              </ul>
              <div className="esp-quote">Eu não te ensino nada que eu, genuinamente não viva.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 8 — GARANTIA */}
      <section className="section bg-cream">
        <div className="container guarantee">
          <div className="eyebrow">Garantia</div>
          <Ornament />
          <h2>Seu produto no ar ou seu <em>dinheiro de volta</em></h2>
          <Ornament />
          <p>Eu confio tanto no processo que, se você participar dos 2 dias ao vivo e não sair com o seu produto no ar, pronto pra vender, eu devolvo <strong style={{ color: "var(--bordeaux)" }}>100% do valor</strong>.</p>
          <div className="shield">
            <div className="shield-circle">
              <svg viewBox="0 0 24 24"><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z" /><polyline points="9 12 11 14 15 10" /></svg>
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
          <h2 className="serif" style={{ textAlign: "center", fontSize: "clamp(26px,5vw,34px)", fontWeight: 400, margin: 0, color: "var(--ink)" }}>
            Ainda tem dúvidas?
          </h2>
          <div className="faq">
            {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
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
            <span>2 Dias</span><span>Ao Vivo</span><span>R$49,00</span>
          </div>
          <p>As vagas do lote 03 são limitadas e se encerram em breve. Garanta a sua agora e construa, em apenas um fim de semana, o ativo digital que vai vender por você todos os dias.</p>
          <CTA />
          <div className="closing-note">Vagas do lote 03 se encerram em breve.</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Liz Valz · Workshop Venda Enquanto Dorme™<br/>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
