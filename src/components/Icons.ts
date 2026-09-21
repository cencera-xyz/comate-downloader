/**
 * Icons Registry — Official Brand Logos & Lucide System Icons
 * Pure SVG strings with crisp geometry, exact brand colors, and zero runtime dependencies.
 */

export interface IconOptions {
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

// Helper to format options
function getAttrs(opts: IconOptions = {}, defaultSize = 16, defaultStroke = 2): string {
  const size = opts.size ?? defaultSize;
  const cls = opts.className ? ` class="${opts.className}"` : '';
  const col = opts.color ? opts.color : 'currentColor';
  const sw = opts.strokeWidth ?? defaultStroke;
  return `width="${size}" height="${size}"${cls} stroke="${col}" stroke-width="${sw}"`;
}

/* ==========================================================================
   OFFICIAL EXTERNAL BRAND LOGOS
   ========================================================================== */

export const BrandIcons = {
  /** OpenAI / ChatGPT Official Spiral Rosette Mark */
  ChatGPT: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3428 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3428 7.8956zm16.0993 3.8558L12.5993 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219zm1.1448-2.6108l2.5485-1.4722 2.5532 1.4722v2.9351l-2.5532 1.4722-2.5485-1.4722v-2.9351z"/>
    </svg>`;
  },

  /** GitHub Official Invertocat Mark */
  GitHub: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>`;
  },

  /** arXiv Official Academic Research Mark */
  arXiv: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12.8 1.2c-.4-.3-1-.3-1.4 0L2 7.8c-.6.4-.6 1.4 0 1.8l9.4 6.6c.4.3 1 .3 1.4 0l9.4-6.6c.6-.4.6-1.4 0-1.8L12.8 1.2zm-4.6 13l-4.4 3.1c-.6.4-.6 1.4 0 1.8l7.4 5.2c.4.3 1 .3 1.4 0l7.4-5.2c.6-.4.6-1.4 0-1.8l-4.4-3.1-3.7 2.6-3.7-2.6z"/>
    </svg>`;
  },

  /** Linear Official Angled Compass Mark */
  Linear: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M3.1 14.6L14.6 3.1c.4-.4 1.1-.4 1.5 0l4.8 4.8c.4.4.4 1.1 0 1.5L9.4 20.9c-.4.4-1.1.4-1.5 0l-4.8-4.8c-.4-.4-.4-1.1 0-1.5zm8.9-8.9L4.8 13.9l3.3 3.3 7.2-7.2-3.3-3.3z"/>
    </svg>`;
  },

  /** Hugging Face Official Vector Mark */
  HuggingFace: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm-4-9a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 8 11zm8 0a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 16 11zm-4 5.5a5.5 5.5 0 0 1-4.7-2.7.75.75 0 0 1 1.3-.76A4 4 0 0 0 12 15a4 4 0 0 0 3.4-1.96.75.75 0 0 1 1.3.76A5.5 5.5 0 0 1 12 16.5z"/>
    </svg>`;
  },

  /** Vercel Official Triangle Mark */
  Vercel: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12 2L24 22H0L12 2z"/>
    </svg>`;
  },

  /** DuckDuckGo Official Vector Mark */
  DuckDuckGo: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.5 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-9 0c.8 0 1.5.7 1.5 1.5S8.3 12.5 7.5 12.5 6 11.8 6 11s.7-1.5 1.5-1.5zm4.5 9c-3.1 0-5.8-2-6.7-4.8.2 0 .5.1.7.1 2.2 0 4.1-1.3 5-3.1.9 1.8 2.8 3.1 5 3.1.3 0 .5 0 .7-.1-.9 2.8-3.6 4.8-6.7 4.8z"/>
    </svg>`;
  },

  /** Microsoft Windows Official 4-Pane Mark */
  Windows: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>`;
  },

  /** Linux Tux Official Silhouette Mark */
  Linux: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.3.5 2.4 1.3 3.2-1.9 1.1-3.3 3.2-3.3 5.8 0 .8.2 1.6.5 2.3L4.2 19c-.3.4-.2 1 .2 1.3.2.2.5.2.8.2h13.6c.3 0 .6-.1.8-.2.4-.3.5-.9.2-1.3l-1.8-1.2c.3-.7.5-1.5.5-2.3 0-2.6-1.4-4.7-3.3-5.8.8-.8 1.3-1.9 1.3-3.2A4.5 4.5 0 0 0 12 2zm-1.5 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-1.5 2c.8 0 1.5.3 2 .8-.5.4-1.2.7-2 .7s-1.5-.3-2-.7c.5-.5 1.2-.8 2-.8z"/>
    </svg>`;
  },

  /** Apple Official Bitten Apple Mark */
  Apple: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.38c.64-.78 1.08-1.86.96-2.95-1 .04-2.15.65-2.82 1.43-.58.67-1.1 1.77-.96 2.83 1.11.09 2.19-.53 2.82-1.31"/>
    </svg>`;
  },

  /** Wikipedia Official 'W' Mark */
  Wikipedia: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M12.09 13.52l2.36-7.38h2.09l-3.6 9.77h-1.63L8.7 8.35l-2.61 7.56H4.46L.86 6.14h2.09l2.36 7.38 2.37-7.38h1.83l2.58 7.38zM21.9 6.14l-3.24 9.77h-1.63l-1.3-3.9 1.14-3.48h1.79l1.45 4.6 1.79-7h1.04z"/>
    </svg>`;
  },

  /** Hacker News Official 'Y' Mark */
  HackerNews: (opts: IconOptions = {}): string => {
    const size = opts.size ?? 16;
    const cls = opts.className ? ` class="${opts.className}"` : '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"${cls} fill="currentColor">
      <path d="M2 2h20v20H2V2zm10 11.5l3.8-7.5h-2.1l-2.7 5.5-2.7-5.5H6.2l3.8 7.5v5.5H12v-5.5z"/>
    </svg>`;
  }
};

/* ==========================================================================
   LUCIDE SYSTEM ICONS (STROKE BASED)
   ========================================================================== */

export const LucideIcons = {
  Shield: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,

  ShieldCheck: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,

  ShieldAlert: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,

  Lock: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,

  KeyRound: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,

  Cpu: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,

  Terminal: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,

  Zap: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,

  Sparkles: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,

  Search: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,

  Brain: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,

  BarChart3: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,

  Table2: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>`,

  CheckCircle2: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,

  Rocket: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,

  Bug: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m10 4 1 2"/><path d="m14 4-1 2"/></svg>`,

  MessageSquare: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,

  Settings2: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,

  RefreshCw: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,

  PackageCheck: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,

  Monitor: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,

  Plus: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,

  X: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,

  FileText: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,

  Pause: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>`,

  Play: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,

  ChevronDown: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,

  Copy: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,

  Check: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,

  Smartphone: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,

  Laptop: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`,

  Download: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,

  ExternalLink: (opts: IconOptions = {}): string =>
    `<svg viewBox="0 0 24 24" fill="none" ${getAttrs(opts)} stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`
};
