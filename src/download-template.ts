import download from "download-git-repo";
import path from "path";

export async function downloadTemplate(
  name: string,
  cwd: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(
      "Running: Download Template from Github: mattwyskiel/mattwyskiel-sst-template"
    );
    download(
      "mattwyskiel/mattwyskiel-sst-template",
      path.join(cwd, name),
      {},
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path.join(cwd, name));
        }
      }
    );
  });
}
