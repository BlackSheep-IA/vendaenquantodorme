import { createFileRoute } from "@tanstack/react-router";
import lizDesktop from "@/assets/liz-desktop.asset.json";
import lizMobile from "@/assets/liz-mobile.asset.json";
import ref01 from "@/assets/ref-dobra_01.asset.json";
import ref02 from "@/assets/ref-dobra_02.asset.json";
import ref03 from "@/assets/ref-dobra_03.asset.json";
import ref04 from "@/assets/ref-dobra_04.asset.json";
import ref05 from "@/assets/ref-dobra_05.asset.json";
import ref07 from "@/assets/ref-dobra_07.asset.json";
import ref08 from "@/assets/ref-dobra_08.asset.json";


const CHECKOUT = "https://pay.kiwify.com.br/VxLqXfi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workshop Venda Enquanto Dorme™ — Liz Valz" },
      {
        name: "description",
        content:
          "Em 2 dias, você, eu e uma IA colocamos no ar um produto que vende todos os dias e transforma seguidoras em clientes da sua oferta principal.",
      },
      { property: "og:title", content: "Workshop Venda Enquanto Dorme™" },
      {
        property: "og:description",
        content:
          "O produto que vende sozinho todos os dias e conduz suas clientes para sua oferta principal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: lizDesktop.url },
    ],
  }),
  component: Page,
});

function Crown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M10 44 L14 22 L24 34 L32 16 L40 34 L50 22 L54 44 Z" strokeLinejoin="round" />
      <path d="M12 50 H52" strokeLinecap="round" />
      <circle cx="14" cy="20" r="1.4" fill="currentColor" />
      <circle cx="32" cy="14" r="1.6" fill="currentColor" />
      <circle cx="50" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Crown className="w-8 h-8 text-[var(--gold)]" />
      <div className="mt-1 text-[10px] tracking-[0.5em] text-[var(--foreground)] font-medium">LV</div>
    </div>
  );
}

function Diamond() {
  return (
    <div className="divider-diamond">
      <svg width="8" height="8" viewBox="0 0 8 8" className="text-[var(--gold)]">
        <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="currentColor" />
      </svg>
    </div>
  );
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-wine ${className}`}
    >
      {children}
    </a>
  );
}

const SIDE_CARD_ITEMS = [
  {
    label: "2 dias intensivos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="16" rx="1.5" />
        <path d="M3 9 H21" />
        <path d="M8 3 V7 M16 3 V7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Ao vivo",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M5 12 a7 7 0 0 1 14 0" />
        <path d="M2.5 12 a9.5 9.5 0 0 1 19 0" />
      </svg>
    ),
  },
  {
    label: "Vagas limitadas",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="10" width="14" height="10" rx="1.2" />
        <path d="M8 10 V7 a4 4 0 0 1 8 0 V10" />
      </svg>
    ),
  },
];

const METRICS = [
  { t: "120–200k/mês", s: "de faturamento" },
  { t: "100+ alunas", s: "transformadas" },
  { t: "Sem sessão estratégica", s: "nem call de vendas" },
  { t: "Funil perpétuo", s: "e escalável" },
];

function SideCard() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-[12px] shadow-[0_20px_50px_-30px_rgba(60,30,15,0.35)] divide-y divide-[var(--border)] w-[220px]">
      {SIDE_CARD_ITEMS.map((it) => (
        <div key={it.label} className="flex items-center gap-3 px-4 py-3 text-[var(--foreground)]">
          <span className="text-[var(--wine)] shrink-0">{it.icon}</span>
          <span className="text-[10px] tracking-[0.28em] uppercase font-medium">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

function MetricsBlock() {
  return (
    <div className="border-y border-[var(--border)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {METRICS.map((it) => (
          <div key={it.t}>
            <div className="font-display text-lg md:text-xl text-[var(--foreground)] leading-tight">{it.t}</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted-foreground)] mt-1">
              {it.s}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ===================== DOBRA 01 — HERO ===================== */}
      <section className="hidden md:block relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8 md:pt-10">
          <header className="flex flex-col items-center">
            <Logo />
          </header>

          <div className="mt-4 text-center">
            <div className="text-[11px] tracking-[0.45em] uppercase text-[var(--foreground)]">
              Workshop Venda Enquanto Dorme<span className="align-super text-[7px]">™</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--wine)]" />
                Ao vivo e online
              </span>
              <span className="hidden sm:inline-block w-px h-3 bg-[var(--border)]" />
              <span>18 e 19 de julho</span>
            </div>
          </div>
        </div>

        {/* Headline — centralizada, dominante */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 mt-10 md:mt-14 text-center">
          <h1 className="font-display text-[3.1rem] leading-[1.04] sm:text-[3.9rem] md:text-[4.6rem] lg:text-[5rem] text-[var(--foreground)]">
            Em apenas 2 dias, você, eu e uma IA vamos colocar no ar um produto que vende todos os dias.
          </h1>
          <p className="mt-7 font-display italic text-[1.35rem] md:text-[1.7rem] font-semibold text-[var(--foreground)]">
            E transforma seguidoras em clientes da sua <em>oferta principal</em>.
          </p>
        </div>

        {/* Mobile: benefícios + CTA + última vaga ANTES da foto */}
        <div className="md:hidden mx-auto max-w-[680px] px-6 mt-8 text-center">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--foreground)]">
            {["Oferta criada", "Funil estruturado", "IA configurada", "Mecanismo de ascensão pronto"].map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--wine)]">
                  <circle cx="7" cy="7" r="6.2" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 7.2 L6.2 9.2 L10 5.4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <CTA className="mt-7 w-full">Quero minha vaga</CTA>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[var(--muted-foreground)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2.5" y="5.5" width="7" height="5" rx="0.6" />
              <path d="M4 5.5 V3.8 a2 2 0 0 1 4 0 V5.5" />
            </svg>
            Somente 40 vagas disponíveis no Lote 01
          </div>

          {/* Info chip-line substituindo o card lateral no mobile */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] tracking-[0.3em] uppercase text-[var(--foreground)]">
            <span>2 dias intensivos</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
            <span>Ao vivo</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
            <span>Vagas limitadas</span>
          </div>
        </div>

        {/* Foto Liz — integrada ao fundo */}
        <div className="mx-auto max-w-[1280px] px-4 md:px-10 mt-10 md:mt-14">
          {/* Desktop layout: foto centralizada + card lateral */}
          <div className="relative hidden md:flex justify-center items-center min-h-[560px]">
            <div className="relative w-[min(640px,55vw)]">
              <div className="photo-glow" />
              <img
                src={lizDesktop.url}
                alt="Liz Valz"
                className="relative z-10 w-full h-auto object-cover photo-mask-desktop"
              />
            </div>
            <div className="absolute right-[6%] top-1/2 -translate-y-1/2 z-20">
              <SideCard />
            </div>
          </div>

          {/* Mobile: foto integrada */}
          <div className="md:hidden relative mt-2">
            <div className="photo-glow" />
            <img
              src={lizMobile.url}
              alt="Liz Valz"
              className="relative z-10 w-full h-auto object-cover photo-mask-mobile"
            />
          </div>
        </div>

        {/* Desktop: benefícios + CTA abaixo da foto */}
        <div className="hidden md:block mx-auto max-w-[900px] px-6 md:px-10 mt-10 text-center">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-[var(--foreground)]">
            {["Oferta criada", "Funil estruturado", "IA configurada", "Mecanismo de ascensão pronto"].map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--wine)]">
                  <circle cx="7" cy="7" r="6.2" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 7.2 L6.2 9.2 L10 5.4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <CTA className="mt-7 min-w-[420px]">Quero minha vaga</CTA>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs tracking-[0.28em] uppercase text-[var(--muted-foreground)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2.5" y="5.5" width="7" height="5" rx="0.6" />
              <path d="M4 5.5 V3.8 a2 2 0 0 1 4 0 V5.5" />
            </svg>
            Somente 40 vagas disponíveis no Lote 01
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-14 md:mt-20">
          <MetricsBlock />
        </div>
      </section>

      {/* ===================== DOBRA 02 — QUEBRA DE OBJEÇÃO ===================== */}
      <section className="hidden md:block py-24 md:py-32">
        <div className="mx-auto max-w-[880px] px-6 md:px-10 text-center">
          <div className="eyebrow">Quebra de Objeção</div>
          <h2 className="mt-4 font-display italic text-3xl md:text-[2.6rem] leading-[1.15] text-[var(--foreground)]">
            “Eu já paguei caro em mentorias e continuei me virando sozinha. Por que com você seria diferente?”
          </h2>
          <Diamond />
          <div className="mt-8 space-y-5 text-[var(--foreground)]/85 text-lg leading-relaxed">
            <p>A diferença é simples.</p>
            <p>Nas outras formações você recebeu informação.</p>
            <p className="font-display italic text-[var(--wine)] text-xl">Aqui você constrói o ativo.</p>
            <p>Não é uma aula para assistir.</p>
            <p>Não é um curso para consumir.</p>
            <p>Não é mais uma estratégia para anotar.</p>
            <p>É uma oficina prática, ao vivo, onde você constrói seu produto junto comigo utilizando IA.</p>
            <p>Você não sai com tarefas. Você sai com algo funcionando.</p>
            <p>Você não sai com a promessa de fazer depois. Sai com um produto pronto para vender.</p>
            <p className="font-display italic text-xl">Por isso, dessa vez, você finalmente sai do lugar.</p>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 03 — O CAMINHO ===================== */}
      <section className="hidden md:block py-24 md:py-32 bg-[color-mix(in_oklab,var(--gold)_5%,transparent)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-[920px] px-6 md:px-10 text-center">
          <Diamond />
          <div className="eyebrow mt-6">O Caminho</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.8rem] leading-[1.15]">
            Trabalhar mais não vai te tirar do lugar.
            <br />
            <em className="italic">Um produto que vende enquanto você dorme, sim.</em>
          </h2>
          <div className="mt-10 space-y-5 text-lg text-[var(--foreground)]/85 leading-relaxed">
            <p>
              Enquanto cada venda depende da sua presença, do seu atendimento ou da sua agenda, sua renda
              continua limitada.
            </p>
            <p>Escalar não é trabalhar mais.</p>
            <p>Escalar não é lotar a agenda.</p>
            <p>Escalar não é fazer mais reuniões.</p>
            <p className="font-display italic text-2xl text-[var(--wine)]">
              Escalar é construir algo que continua vendendo mesmo quando você não está trabalhando.
            </p>
            <p>É exatamente isso que vamos construir juntas.</p>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 04 — O QUE VAMOS CONSTRUIR ===================== */}
      <section className="hidden md:block py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <div className="eyebrow">O que vamos construir</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.6rem] leading-tight">
            O que vamos construir juntas <em className="italic">utilizando IA</em> nesses 2 dias
          </h2>
          <Diamond />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                day: "Dia 1 — Sábado",
                items: [
                  "Criação do produto.",
                  "Estruturação da oferta.",
                  "Página pronta.",
                  "Checkout pronto.",
                  "Produto preparado para vender.",
                ],
                result: "Produto publicado e pronto para receber vendas.",
              },
              {
                day: "Dia 2 — Domingo",
                items: [
                  "Estruturação do funil.",
                  "Automação.",
                  "Mecanismo de ascensão.",
                  "Posicionamento da oferta principal.",
                ],
                result: "Sistema completo funcionando.",
              },
            ].map((d) => (
              <article
                key={d.day}
                className="bg-[var(--card)] border border-[var(--border)] p-8 md:p-10 text-left"
              >
                <div className="eyebrow text-[var(--wine)]">{d.day}</div>
                <ul className="mt-6 space-y-3 text-[var(--foreground)]/85">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <div className="eyebrow">Resultado</div>
                  <p className="mt-2 font-display italic text-xl text-[var(--foreground)]">{d.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 05 — CRONOGRAMA ===================== */}
      <section className="hidden md:block py-24 md:py-32 bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 text-center">
          <div className="eyebrow text-[var(--gold)]">Cronograma</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.6rem]">Como vai funcionar</h2>
          <div className="divider-diamond mt-6 [&_*]:!text-[var(--gold)]">
            <svg width="8" height="8" viewBox="0 0 8 8" className="text-[var(--gold)]">
              <rect x="1" y="1" width="6" height="6" transform="rotate(45 4 4)" fill="currentColor" />
            </svg>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16 text-left">
            {[
              {
                date: "18 de julho",
                time: "09h às 18h",
                lines: ["Criação do produto utilizando IA.", "Página e checkout publicados."],
              },
              {
                date: "19 de julho",
                time: "09h às 18h",
                lines: ["Estruturação do sistema de vendas e mecanismo de ascensão."],
              },
            ].map((d) => (
              <div key={d.date} className="border-l border-[var(--gold)]/40 pl-6">
                <div className="font-display text-3xl">{d.date}</div>
                <div className="eyebrow mt-2 text-[var(--gold)]">{d.time}</div>
                <div className="mt-6 space-y-2 text-[var(--background)]/80">
                  {d.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 06 — OFERTA ===================== */}
      <section className="hidden md:block py-24 md:py-32">
        <div className="mx-auto max-w-[860px] px-6 md:px-10 text-center">
          <div className="eyebrow">A Oferta</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.8rem] leading-[1.15]">
            Você não precisa mais depender da própria agenda para vender.
          </h2>
          <Diamond />
          <p className="mt-8 text-lg text-[var(--foreground)]/85 leading-relaxed">
            Enquanto outras pessoas continuam buscando clientes diariamente, você começa a construir um
            ativo que continua trabalhando depois que o evento termina.
          </p>

          <div className="mt-12 bg-[var(--card)] border border-[var(--border)] p-8 md:p-12 text-left">
            <div className="eyebrow text-center">Você recebe</div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[var(--foreground)]/90">
              {[
                "Acesso aos 2 dias ao vivo",
                "Estrutura completa do produto",
                "Estrutura do funil",
                "Configuração com IA",
                "Modelos utilizados durante o workshop",
                "Sessões de dúvidas ao vivo",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 14 14" className="mt-1 text-[var(--wine)] shrink-0">
                    <circle cx="7" cy="7" r="6.2" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M4 7.2 L6.2 9.2 L10 5.4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-[var(--border)] text-center">
              <div className="eyebrow">Investimento — Lote 01</div>
              <div className="mt-3 font-display text-6xl md:text-7xl text-[var(--wine)]">R$ 29,00</div>
              <div className="mt-3 text-sm tracking-wider uppercase text-[var(--muted-foreground)]">Somente 40 vagas disponíveis</div>
              <CTA className="mt-8 w-full sm:w-auto sm:min-w-[480px]">Garantir minha vaga no Lote 01 por R$ 29,00</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 07 — SOBRE A ESPECIALISTA ===================== */}
      <section className="hidden md:block py-24 md:py-32 bg-[color-mix(in_oklab,var(--gold)_5%,transparent)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
          <div className="eyebrow">Sobre a especialista</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.4rem] leading-tight">
            Quem vai conduzir você nesses 2 dias?
          </h2>
          <Diamond />

          <div className="mt-12 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center text-left">
            <div className="relative">
              <div className="photo-glow" />
              <img
                src={lizDesktop.url}
                alt="Liz Valz"
                className="relative z-10 w-full h-auto photo-mask-desktop"
              />
              <div className="relative z-20 mt-4 text-center font-script text-3xl text-[var(--foreground)]">
                Liz Valz
              </div>
            </div>
            <div>
              <p className="text-lg text-[var(--foreground)]/85 leading-relaxed">
                Eu construí um negócio digital que me permite trabalhar com liberdade, ter previsibilidade e
                manter uma rotina alinhada com a vida que escolhi viver.
              </p>
              <ul className="mt-8 space-y-3 text-[var(--foreground)]/90">
                {[
                  "Mais de 25 milhões faturados",
                  "Criadora do Sistema de Vendas Invisíveis™",
                  "Criadora da Aceleradora High Ticket IA",
                  "Milhares de mulheres impactadas",
                  "Dezenas de alunas que atingiram faturamentos expressivos",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[var(--wine)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display italic text-xl text-[var(--foreground)]">
                Eu ensino apenas aquilo que vivo diariamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 08 — GARANTIA ===================== */}
      <section className="hidden md:block py-24 md:py-28">
        <div className="mx-auto max-w-[760px] px-6 md:px-10 text-center">
          <Crown className="w-10 h-10 mx-auto text-[var(--gold)]" />
          <div className="eyebrow mt-4">Garantia</div>
          <h2 className="mt-4 font-display text-3xl md:text-[2.4rem] leading-tight">
            Seu produto publicado ou seu dinheiro de volta
          </h2>
          <Diamond />
          <p className="mt-8 text-lg text-[var(--foreground)]/85 leading-relaxed">
            Se você participar dos dois dias ao vivo e não sair com seu produto publicado e pronto para
            vender, devolvemos 100% do valor investido.
          </p>
          <p className="mt-4 font-display italic text-2xl text-[var(--wine)]">Risco zero.</p>
        </div>
      </section>

      {/* ===================== DOBRA 09 — FAQ ===================== */}
      <section className="py-24 md:py-28 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center">
            <div className="eyebrow">Perguntas frequentes</div>
            <h2 className="mt-4 font-display text-3xl md:text-[2.4rem]">FAQ</h2>
            <Diamond />
          </div>
          <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {[
              { q: "Vai ficar gravado?", a: "Sim. Mas a transformação acontece ao vivo." },
              {
                q: "Eu já tenho produto. Serve para mim?",
                a: "Sim. Você poderá estruturar um sistema mais previsível de vendas.",
              },
              { q: "Preciso saber usar IA?", a: "Não. Os comandos serão entregues durante o workshop." },
              {
                q: "Como recebo acesso?",
                a: "Após a inscrição você receberá todas as instruções por e-mail.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-display text-xl text-[var(--foreground)]">{f.q}</span>
                  <span className="ml-4 text-[var(--gold)] transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[var(--foreground)]/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ENCERRAMENTO ===================== */}
      <section className="hidden md:block py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[860px] px-6 md:px-10">
          <Logo className="mx-auto" />
          <div className="mt-6 eyebrow">
            Workshop Venda Enquanto Dorme<span className="align-super text-[7px]">™</span>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            18 e 19 de julho
            <br />
            <em className="italic text-[var(--wine)]">Ao vivo e online</em>
          </h2>
          <Diamond />
          <p className="mt-6 text-[var(--muted-foreground)] tracking-[0.28em] uppercase text-xs">
            Somente 40 vagas disponíveis no Lote 01
          </p>
          <CTA className="mt-10 w-full sm:w-auto sm:min-w-[480px]">Garantir minha vaga no Lote 01 por R$ 29,00</CTA>
        </div>
        <footer className="mt-24 text-xs text-[var(--muted-foreground)]">
          © Liz Valz — Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
}
