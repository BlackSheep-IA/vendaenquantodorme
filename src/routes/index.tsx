import { createFileRoute } from "@tanstack/react-router";
import lizDesktop from "@/assets/liz-desktop.asset.json";
import lizMobile from "@/assets/liz-mobile.asset.json";
import envelope01 from "@/assets/envelope-01.asset.json";
import envelope02 from "@/assets/envelope-02.asset.json";

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

function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ===================== DOBRA 01 — HERO ===================== */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8 md:pt-10">
          {/* Top nav: logo + meta */}
          <header className="grid md:grid-cols-[1fr_auto_1fr] items-start gap-6">
            <div className="hidden md:block" />
            <Logo className="mx-auto" />
            <div className="hidden md:flex justify-end" />
          </header>

          <div className="mt-4 text-center">
            <div className="text-[11px] tracking-[0.45em] uppercase text-[var(--foreground)]">
              Workshop Venda Enquanto Dorme<span className="align-super text-[7px]">™</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--wine)]" />
                Ao vivo e online
              </span>
              <span className="w-px h-3 bg-[var(--border)]" />
              <span>18 e 19 de julho</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-10 md:mt-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Copy column */}
          <div className="relative">
            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-[3.2rem] md:text-[3.8rem] text-[var(--foreground)]">
              Em apenas 2 dias, você, eu e uma IA vamos colocar no ar um produto que vende todos os dias.
            </h1>
            <p className="mt-6 font-display italic text-xl md:text-2xl text-[var(--foreground)]/80">
              E transforma seguidoras em clientes da sua <em>oferta principal</em>.
            </p>

            <div className="mt-8">
              <div className="eyebrow mb-3">Você sai da imersão com</div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--foreground)]">
                {["Oferta criada", "Funil estruturado", "IA configurada", "Mecanismo de ascensão pronto"].map(
                  (b) => (
                    <li key={b} className="inline-flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--wine)]">
                        <circle cx="7" cy="7" r="6.2" fill="none" stroke="currentColor" strokeWidth="1" />
                        <path d="M4 7.2 L6.2 9.2 L10 5.4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <a href={CHECKOUT} className="btn-wine mt-8 w-full md:w-auto md:min-w-[420px]">
              Quero minha vaga
            </a>
            <div className="mt-4 flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[var(--muted-foreground)]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2.5" y="5.5" width="7" height="5" rx="0.6" />
                <path d="M4 5.5 V3.8 a2 2 0 0 1 4 0 V5.5" />
              </svg>
              Últimas vagas disponíveis do Lote 0
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <picture>
              <source media="(max-width: 767px)" srcSet={lizMobile.url} />
              <img
                src={lizDesktop.url}
                alt="Liz Valz"
                className="w-full h-auto object-cover rounded-sm shadow-[0_30px_80px_-40px_rgba(60,30,15,0.45)]"
              />
            </picture>

            {/* Envelope overlay */}
            <img
              src={envelope01.url}
              alt="Carta de Liz Valz"
              className="hidden md:block absolute -bottom-10 -left-16 w-[42%] max-w-[280px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
            />

            {/* Floating info cards */}
            <div className="hidden md:flex absolute top-6 right-6 flex-col gap-3">
              {[
                { label: "2 dias", sub: "Intensivos" },
                { label: "Ao vivo", sub: "" },
                { label: "Vagas", sub: "Limitadas" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-[var(--card)]/90 backdrop-blur border border-[var(--border)] px-4 py-2 text-right"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted-foreground)]">
                    {c.label}
                  </div>
                  {c.sub && (
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--foreground)]">
                      {c.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 md:mt-24 border-y border-[var(--border)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { t: "Mobile First", s: "Experiência editorial" },
              { t: "Apenas 3 CTAs", s: "Sem ruído" },
              { t: "Sem call de vendas", s: "Sem sessão estratégica" },
              { t: "Produto pronto", s: "Em 2 dias" },
            ].map((it) => (
              <div key={it.t}>
                <div className="font-display text-lg text-[var(--foreground)]">{it.t}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted-foreground)] mt-1">
                  {it.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 02 — QUEBRA DE OBJEÇÃO (envelope) ===================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src={envelope02.url}
              alt="Envelope com mensagem para você"
              className="w-full max-w-[520px] mx-auto drop-shadow-[0_30px_50px_rgba(60,30,15,0.25)]"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="ornament eyebrow mb-6">Quebra de Objeção</div>
            <h2 className="font-display italic text-3xl md:text-[2.6rem] leading-[1.15] text-[var(--foreground)]">
              “Eu já paguei caro em mentorias e continuei me virando sozinha. Por que com você seria diferente?”
            </h2>
            <div className="mt-8 space-y-5 text-[var(--foreground)]/85 text-lg leading-relaxed">
              <p>A diferença é simples.</p>
              <p>Nas outras formações você recebeu informação.</p>
              <p className="font-display italic text-[var(--wine)] text-xl">Aqui você constrói o ativo.</p>
              <p>Não é uma aula para assistir.</p>
              <p>Não é um curso para consumir.</p>
              <p>Não é mais uma estratégia para anotar.</p>
              <p>
                É uma oficina prática, ao vivo, onde você constrói seu produto junto comigo utilizando IA.
              </p>
              <p>Você não sai com tarefas. Você sai com algo funcionando.</p>
              <p>Você não sai com a promessa de fazer depois. Sai com um produto pronto para vender.</p>
              <p className="font-display italic text-xl">
                Por isso, dessa vez, você finalmente sai do lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 03 — O CAMINHO ===================== */}
      <section className="py-24 md:py-32 bg-[color-mix(in_oklab,var(--gold)_5%,transparent)] border-y border-[var(--border)]">
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
      <section className="py-24 md:py-32">
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
      <section className="py-24 md:py-32 bg-[var(--foreground)] text-[var(--background)]">
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
      <section className="py-24 md:py-32">
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
              <div className="eyebrow">Investimento — Lote 0</div>
              <div className="mt-3 font-display text-6xl md:text-7xl text-[var(--wine)]">R$ 19,90</div>
              <a href={CHECKOUT} className="btn-wine mt-8 w-full sm:w-auto sm:min-w-[480px]">
                Garantir minha vaga no Lote 0
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DOBRA 07 — SOBRE A ESPECIALISTA ===================== */}
      <section className="py-24 md:py-32 bg-[color-mix(in_oklab,var(--gold)_5%,transparent)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">
          <div className="relative">
            <img src={lizDesktop.url} alt="Liz Valz" className="w-full h-auto rounded-sm" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[var(--background)] px-6 py-2 border border-[var(--border)] font-script text-2xl text-[var(--foreground)]">
              Liz Valz
            </div>
          </div>
          <div>
            <div className="eyebrow">Sobre a especialista</div>
            <h2 className="mt-4 font-display text-3xl md:text-[2.4rem] leading-tight">
              Quem vai conduzir você nesses 2 dias?
            </h2>
            <p className="mt-6 text-lg text-[var(--foreground)]/85 leading-relaxed">
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
      </section>

      {/* ===================== DOBRA 08 — GARANTIA ===================== */}
      <section className="py-24 md:py-28">
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
      <section className="py-24 md:py-32 text-center">
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
            Últimas vagas disponíveis do Lote 0
          </p>
          <a href={CHECKOUT} className="btn-wine mt-10 w-full sm:w-auto sm:min-w-[480px]">
            Garantir minha vaga no Lote 0
          </a>
        </div>
        <footer className="mt-24 text-xs text-[var(--muted-foreground)]">
          © Liz Valz — Todos os direitos reservados.
        </footer>
      </section>
    </main>
  );
}
