import type * as React from "react";

import {
  createHighlighterCore,
  type GrammarState,
  type HighlighterCore,
} from "shiki/core";

import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

// Supported languages
const languages = {
  bash: () => import("shiki/langs/shellscript.mjs"),
  css: () => import("shiki/langs/css.mjs"),
  diff: () => import("shiki/langs/diff.mjs"),
  html: () => import("shiki/langs/html.mjs"),
  javascript: () => import("shiki/langs/javascript.mjs"),
  json: () => import("shiki/langs/json.mjs"),
  jsx: () => import("shiki/langs/jsx.mjs"),
  markdown: () => import("shiki/langs/markdown.mjs"),
  python: () => import("shiki/langs/python.mjs"),
  sql: () => import("shiki/langs/sql.mjs"),
  tsx: () => import("shiki/langs/tsx.mjs"),
  typescript: () => import("shiki/langs/typescript.mjs"),
  yaml: () => import("shiki/langs/yaml.mjs"),
};

type SupportedLanguage = keyof typeof languages;

const aliases: Record<string, SupportedLanguage> = {
  js: "javascript",
  md: "markdown",
  py: "python",
  sh: "bash",
  shell: "bash",
  shellscript: "bash",
  ts: "typescript",
  yml: "yaml",
  zsh: "bash",
};

let highlighter: Promise<HighlighterCore> | undefined;

function getHighlighter(): Promise<HighlighterCore> {
  highlighter ??= createHighlighterCore({
    themes: [
      import("shiki/themes/github-light.mjs"),
      import("shiki/themes/github-dark.mjs"),
    ],
    langs: [],
    engine: createJavaScriptRegexEngine({
      forgiving: true,
    }),
  }).catch((error) => {
    highlighter = undefined;
    throw error;
  });

  return highlighter;
}

function getLanguage(language: string): SupportedLanguage | "ansi" | null {
  const name = language.trim().toLowerCase();

  if (name === "ansi") {
    return "ansi";
  }

  if (Object.prototype.hasOwnProperty.call(languages, name)) {
    return name as SupportedLanguage;
  }

  return aliases[name] ?? null;
}

export async function loadHighlighter(language: string) {
  const lang = getLanguage(language);

  if (!lang) {
    return null;
  }

  const shiki = await getHighlighter();

  if (
    lang !== "ansi" &&
    !shiki.getLoadedLanguages().includes(lang)
  ) {
    await shiki.loadLanguage(languages[lang]);
  }

  return {
    highlight(code: string, state?: GrammarState) {
      const tokenize = (text: string) =>
        shiki.codeToTokens(text, {
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
          grammarState: state,
        }).tokens;

      const tokens =
        lang === "ansi"
          ? code.split("\n").flatMap((line) => tokenize(line))
          : tokenize(code);

      return {
        lines: tokens.map((line) =>
          line.map((token, index) => (
            <span
              key={index}
              style={token.htmlStyle as React.CSSProperties}
              className="text-(--shiki-light) dark:text-(--shiki-dark)"
            >
              {token.content}
            </span>
          )),
        ),
        state: shiki.getLastGrammarState(tokens),
      };
    },
  };
}

export async function highlightCode(code: string, language: string) {
  const highlighter = await loadHighlighter(language);

  return highlighter?.highlight(code).lines ?? null;
}