// This client is a minimal scaffold. It will be replaced by auto-generated
// code from the HotData OpenAPI spec via the regenerate workflow.

export interface HotdataClientOptions {
  apiToken: string;
  workspaceId: string;
  baseUrl?: string;
}

export class HotdataClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(options: HotdataClientOptions) {
    this.baseUrl = options.baseUrl ?? "https://api.hotdata.dev";
    this.headers = {
      Authorization: `Bearer ${options.apiToken}`,
      "X-Workspace-Id": options.workspaceId,
      "Content-Type": "application/json",
    };
  }

  private async request(path: string, init?: RequestInit): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: { ...this.headers, ...init?.headers },
    });
  }

  async health(): Promise<Response> {
    return this.request("/health");
  }
}
