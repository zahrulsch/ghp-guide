import CodeBlock from "./CodeBlock"
import Hi from "./Hi"

export default function MainSteps() {
    return (
        <>
            <h3 className="text-xl font-bold">Langkah-langkah</h3>
            <p className="indent-4">
                Berikut adalah langkah-langkah umum untuk mendeploy aplikasi
                React ke GitHub page:
            </p>
            <ol className="list-[auto] pl-4 pr-1 flex flex-col gap-2">
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">
                            Persiapkan Aplikasi React:
                        </h4>
                        <p>
                            Pastikan kamu sudah punya aplikasi React yang akan
                            kamu deploy yaaa :) tidak perlu di<Hi>build</Hi>{" "}
                            dulu, kita akan lakukan langkah <Hi>build</Hi> nanti
                            bersamaan dengan proses <Hi>deploy</Hi>.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">
                            Install Package{" "}
                            <span className="underline underline-offset-2">
                                gh-pages
                            </span>
                            :
                        </h4>
                        <p>
                            Ada beberapa cara untuk teman-teman dalam mendeploy
                            aplikasi ke Github page, salah satunya dengan
                            bantuan package <Hi>gh-pages</Hi>, jalankan perintah
                            berikut untuk install package:
                        </p>
                        <CodeBlock codeType="bash">
                            pnpm add gh-pages -D
                        </CodeBlock>
                        <p>
                            atau jika teman-teman menggunakan <Hi>npm</Hi> bisa
                            dengan perintah berikut:
                        </p>
                        <CodeBlock codeType="bash">
                            npm install gh-pages --save-dev
                        </CodeBlock>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">Perbarui package.json:</h4>
                        <p>
                            Tambahkan key <Hi>"homepage"</Hi> dengan format
                            sebagai berikut:
                        </p>
                        <CodeBlock codeType="javascript">{`{
  ...,
  "homepage": "https://{github-username}.github.io/{repo-name}",
}`}</CodeBlock>
                        <p>
                            Tambahkan perintah <Hi>gh:deploy</Hi> ke bagian{" "}
                            <Hi>"scripts"</Hi> dalam file <Hi>package.json</Hi>:
                        </p>
                        <CodeBlock>
                            {`"scripts": {
  ...,
  "gh:deploy": "pnpm build && gh-pages -d dist"
}`}
                        </CodeBlock>
                        <p>
                            <Hi>dist</Hi> adalah folder output build, silahkan
                            sesuaikan dengan bundler kamu ya. Contoh jika output
                            folder bundler adalah <Hi>output</Hi>, maka ganti
                            script dengan{" "}
                            <Hi>
                                "gh:deploy": "pnpm build && gh-pages -d output
                            </Hi>
                            "
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">
                            Inisiasi Git Di Dalam Project:
                        </h4>
                        <p>
                            Jika sudah, maka inisiasi git pada project kamu,
                            dengan cara menjalankan perintah berikut secara
                            berurutan:
                        </p>
                        <CodeBlock codeType="bash">
                            {`git init 
git add . 
git commit -m "isi pesan commit kamu"`}
                        </CodeBlock>
                        <p>
                            Kemudian tambahkan remote origin dengan perintah
                            berikut:
                        </p>
                        <CodeBlock codeType="bash">
                            {`git remote add origin git@github.com:username/repo-name.git
git push origin master`}
                        </CodeBlock>
                        <p className="bg-yellow-100/60 p-2 text-yellow-700 px-3 rounded">
                            Langkah ini opsional / bisa dilewati jika
                            teman-teman sudah menambahkan remote origin github
                            ya...
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">Deploy ke GitHub Pages:</h4>
                        <p>
                            Jalankan perintah berikut untuk mendeploy aplikasi
                            Anda:
                        </p>
                        <CodeBlock codeType="bash">pnpm gh:deploy</CodeBlock>
                        <p>atau</p>
                        <CodeBlock codeType="bash">npm run gh:deploy</CodeBlock>
                        <p>
                            Proses ini akan membuat build dari aplikasi React
                            Anda dan mengunggahnya ke branch <Hi>gh-pages</Hi>{" "}
                            di repositori GitHub Anda.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">
                            Konfigurasi GitHub Repository:
                        </h4>
                        <p>
                            Buka repository GitHub Anda di browser. Pergi ke tab{" "}
                            <Hi>"Settings"</Hi> dan gulir ke bawah ke bagian{" "}
                            <Hi>"GitHub Pages"</Hi>. Pastikan bahwa opsi{" "}
                            <Hi>"Source"</Hi> diatur ke branch <Hi>gh-pages</Hi>
                            .
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col">
                        <h4 className="font-medium">Akses Aplikasi:</h4>
                        <p>
                            Setelah proses deployment selesai, aplikasi React
                            Anda dapat diakses melalui URL yang diberikan di
                            bagian <Hi>"GitHub Pages"</Hi> pada halaman{" "}
                            <Hi>"Settings"</Hi> repository GitHub Anda.
                        </p>
                    </div>
                </li>
            </ol>
        </>
    )
}
