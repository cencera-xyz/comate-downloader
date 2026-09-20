/**
 * Shared TypeScript definitions for Comate landing page
 */

export type OSPlatform = 'linux' | 'windows' | 'macos';

export interface OSConfig {
  detectedOS: OSPlatform;
  osName: string;
  pkgExt: string;
  downloadLabel: string;
  downloadSub: string;
}

export interface ScratchpadItem {
  text: string;
  status: 'completed' | 'active';
}

export interface SimulatorStep {
  stepNum: string;
  latency: string;
  thought: string;
  scratchpads: ScratchpadItem[];
  cursorX: number;
  cursorY: number;
  action?: () => void;
}
