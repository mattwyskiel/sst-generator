declare module "download-git-repo" {
  interface DownloadOptions {
    clone?: boolean;
    [k: string]: unknown;
  }
  export default function download(
    repository: string,
    destination: string,
    options: DownloadOptions,
    callback: (err: any) => void
  );
}
