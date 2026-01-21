"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useSyncExternalStore,
  useCallback,
} from "react";
import { translations, Language, TranslationKeys } from "./translations";

const STORAGE_KEY = "tung-portfolio-lang";
const DEFAULT_LANGUAGE: Language = "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// LocalStorage subscription for useSyncExternalStore
function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
  return saved && (saved === "vi" || saved === "en") ? saved : DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

// Track if component has mounted (module-level for SSR safety)
let hasMounted = false;
function subscribeMounted(callback: () => void) {
  // Trigger once on mount
  if (!hasMounted) {
    hasMounted = true;
    callback();
  }
  return () => {};
}
function getMounted() {
  return hasMounted;
}
function getServerMounted() {
  return false;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore to read from localStorage without setState in effect
  const storedLanguage = useSyncExternalStore(
    subscribeToStorage,
    getStoredLanguage,
    getServerSnapshot,
  );

  // Track mounted state without useEffect + setState
  const mounted = useSyncExternalStore(
    subscribeMounted,
    getMounted,
    getServerMounted,
  );

  // Persist language changes
  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    // Dispatch storage event to sync across tabs and trigger re-render
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }, []);

  // Compute current language: use stored after mount, default before
  const currentLanguage = mounted ? storedLanguage : DEFAULT_LANGUAGE;
  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider
      value={{ language: currentLanguage, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
