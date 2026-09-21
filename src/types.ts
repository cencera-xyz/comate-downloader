/**
 * Shared TypeScript definitions for Comate landing page
 */

export type OSPlatform = 'linux' | 'windows' | 'macos';
export type DeviceType = 'windows' | 'linux' | 'macos' | 'android' | 'ios' | 'unknown';

export interface DeviceInfo {
  os: OSPlatform;
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  detectedName: string;
  recommendedExt: string;
  recommendedSize: string;
  downloadUrl: string;
  downloadLabel: string;
  downloadSub: string;
  detectedNotice: string;
}

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
