import { useEffect, useRef, useState } from "react";

// Configuráveis para futuros lançamentos (America/Sao_Paulo, BRT = -03:00, sem DST).
export const CAMPAIGN_START = "2026-07-15T00:00:00-03:00";
export const CAMPAIGN_END = "2026-07-25T09:00:00-03:00";

const SCROLL_THRESHOLD = 250;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type Remaining = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeRemaining(endIso: string): Remaining {
  const totalMs = new Date(endIso).getTime() - Date.now();
  const clamped = Math.max(0, totalMs);
  const seconds = Math.floor(clamped / 1000) % 60;
  const minutes = Math.floor(clamped / (1000 * 60)) % 60;
  const hours = Math.floor(clamped / (1000 * 60 * 60)) % 24;
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  return { totalMs, days, hours, minutes, seconds };
}

export default function StickyCountdown() {
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState<Remaining>(() =>
    computeRemaining(CAMPAIGN_END),
  );
  const offerInViewRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => setRemaining(computeRemaining(CAMPAIGN_END));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = document.getElementById("oferta");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) offerInViewRef.current = e.isIntersecting;
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (offerInViewRef.current) return;
    const el = document.getElementById("oferta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { totalMs, days, hours, minutes, seconds } = remaining;
  const ended = totalMs <= 0;
  const lastDay = !ended && totalMs <= 24 * 60 * 60 * 1000;

  let label: React.ReactNode;
  if (ended) {
    label = <span className="sticky-countdown-label">AO VIVO AGORA</span>;
  } else if (lastDay) {
    label = <span className="sticky-countdown-label">🔥 ÚLTIMO DIA</span>;
  } else {
    label = (
      <>
        <span className="sticky-countdown-label">
          🔥 LOTE PROMOCIONAL <span className="sep">•</span> ENCERRA EM
        </span>
        <span className="sticky-countdown-timer">
          <span>{pad(days)} Dias</span>
          <span className="sep">|</span>
          <span>{pad(hours)} Horas</span>
          <span className="sep">|</span>
          <span>{pad(minutes)} Min</span>
          <span className="sep">|</span>
          <span>{pad(seconds)} Seg</span>
        </span>
      </>
    );
  }

  return (
    <div
      className={`sticky-countdown${visible ? " is-visible" : ""}`}
      role="region"
      aria-label="Lote promocional encerra em breve"
    >
      <div className="sticky-countdown-inner">
        <div className="sticky-countdown-text">{label}</div>
        <a
          href="#oferta"
          onClick={handleClick}
          className="sticky-countdown-btn"
        >
          GARANTIR INGRESSO
        </a>
      </div>
    </div>
  );
}
