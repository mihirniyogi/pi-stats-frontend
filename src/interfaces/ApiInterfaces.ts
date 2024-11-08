export interface SysInfoData {
  hostname: string;
  os_type: string;
  os_name: string;
  os_version: string;
  kernel_version: string;
  arch: string;
  last_boot: string;
  uptime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface CpuInfoData {
  cpu_usage: number;
  cpu_temp: number;
  cpu_freq: number;
  cpu_count: number;
  cpu_usage_per_core: {
    c1: number;
    c2: number;
    c3: number;
    c4: number;
  };
}

export interface MemInfoData {
  total: number;
  used: number;
  available: number;
  free: number;
  buffers: number;
  cached: number;
  percent: number;
}

export interface DiskInfoData {
  total: number;
  used: number;
  free: number;
  percent: number;
}

export interface SvcInfoData {
  [key: string]: {
    status: boolean;
    process: string;
    link: string;
  };
}
