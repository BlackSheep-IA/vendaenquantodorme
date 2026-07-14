import { useEffect, useRef, useState } from "react";
import { BUYERS, MESSAGES, TIMES } from "@/data/purchaseNotifications";

type Notif = {
  key: number;
  name: string;
  initial: string;
  message: string;
  time: string;
  color: string;
};

const AVATAR_COLORS = ["#7A1E2B", "#A6803D", "#3D2B1F", "#8B5E34", "#5C1A24"];

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDifferent<T>(list: T[], last: T | null): T {
  if (list.length <= 1) return list[0];
  for (let attempts = 0; attempts < 8; attempts += 1) {
    const v = list[Math.floor(Math.random() * list.length)];
    if (v !== last) return v;
  }
  return list[0];
}

export default function PurchaseNotification() {
  const [current, setCurrent] = useState<Notif | null>(null);
  const orderRef = useRef<string[]>(shuffle(BUYERS));
  const idxRef = useRef(0);
  const lastNameRef = useRef<string | null>(null);
  const lastMsgRef = useRef<string | null>(null);
  const lastTimeRef = useRef<string | null>(null);
  const keyRef = useRef(0);

  useEffect(() => {
    let showTimer: number | undefined;
    let hideTimer: number | undefined;
    let cancelled = false;

    const nextName = (): string => {
      if (idxRef.current >= orderRef.current.length) {
        let reshuffled = shuffle(BUYERS);
        if (lastNameRef.current && reshuffled[0] === lastNameRef.current) {
          reshuffled = shuffle(BUYERS);
          if (reshuffled[0] === lastNameRef.current) {
            [reshuffled[0], reshuffled[reshuffled.length - 1]] = [
              reshuffled[reshuffled.length - 1],
              reshuffled[0],
            ];
          }
        }
        orderRef.current = reshuffled;
        idxRef.current = 0;
      }
      const name = orderRef.current[idxRef.current];
      idxRef.current += 1;
      return name;
    };

    const show = () => {
      if (cancelled) return;
      const name = nextName();
      lastNameRef.current = name;
      const message = pickDifferent(MESSAGES, lastMsgRef.current);
      lastMsgRef.current = message;
      const time = pickDifferent(TIMES, lastTimeRef.current);
      lastTimeRef.current = time;
      const firstName = name.split(" ")[0] ?? name;
      const color =
        AVATAR_COLORS[hashString(name) % AVATAR_COLORS.length];
      keyRef.current += 1;
      setCurrent({
        key: keyRef.current,
        name,
        initial: firstName.charAt(0).toUpperCase(),
        message,
        time,
        color,
      });
      hideTimer = window.setTimeout(() => {
        if (cancelled) return;
        setCurrent(null);
        const delay = 12000 + Math.floor(Math.random() * 8001); // 12–20s
        showTimer = window.setTimeout(show, delay);
      }, 5000);
    };

    showTimer = window.setTimeout(show, 6000);
    return () => {
      cancelled = true;
      if (showTimer) window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="purchase-notification-slot" aria-live="polite">
      {current && (
        <div className="purchase-notification" key={current.key}>
          <div
            className="purchase-notification-avatar"
            style={{ background: current.color }}
            aria-hidden="true"
          >
            {current.initial}
          </div>
          <div className="purchase-notification-body">
            <div className="purchase-notification-name">{current.name}</div>
            <div className="purchase-notification-message">
              {current.message}
            </div>
            <div className="purchase-notification-time">{current.time}</div>
          </div>
        </div>
      )}
    </div>
  );
}
