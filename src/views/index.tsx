import { lazy, Suspense } from "react"
import Hi from "../components/Hi"

const Requirements = lazy(() => import("../components/Requirements"))
const MainSteps = lazy(() => import("../components/MainSteps"))
const ViteSetting = lazy(() => import("../components/ViteSetting"))
const RouterSetting = lazy(() => import("../components/RouterSetting"))

const ig = "https://www.instagram.com/zahrulsch/"

export default function Index() {
    return (
        <div className="py-3 flex flex-col gap-4 leading-8">
            <div className="px-12 flex flex-col gap-3">
                <h1 className="text-center text-2xl font-extrabold">
                    Tutorial Instant 😎 Deploy React App di Github Page
                </h1>
                <p className="text-center text-black/60">
                    Ditulis Oleh{" "}
                    <a
                        href={ig}
                        target="_blank"
                        className="underline underline-offset-2"
                    >
                        Mantracode
                    </a>
                </p>
            </div>
            <div className="flex justify-center">
                <img src="./gh.webp" className="w-48" alt="Github Page" />
            </div>
            <p className="indent-4">
                Kita dapat dengan mudah mendeploy aplikasi web statis ke github
                page agar aplikasi kita bisa diakses banyak orang.{" "}
                <Hi>
                    Contoh kasus yang sering ditemui adalah memanfaatkan Github
                    page sebagai platform untuk mendeploy dokumentasi dari
                    library yang kita buat 😊
                </Hi>
            </p>
            <Suspense>
                <Requirements />
            </Suspense>
            <Suspense>
                <MainSteps />
            </Suspense>
            <Suspense>
                <RouterSetting />
            </Suspense>
            <Suspense>
                <ViteSetting />
            </Suspense>
            <p className="indent-4">
                Perlu diingat bahwa perubahan pada repository dan proses
                deployment mungkin memerlukan beberapa saat untuk terjadi. Jadi,
                berikan waktu beberapa menit setelah menjalankan perintah
                deploy.
            </p>
            <p className="indent-4 mb-2">
                Harap dicatat bahwa langkah-langkah ini adalah panduan umum, dan
                dapat terjadi perubahan pada alur kerja tergantung pada versi
                alat dan dependensi tertentu. Pastikan untuk merujuk pada
                dokumentasi resmi GitHub Pages dan gh-pages untuk informasi yang
                lebih rinci.
            </p>
        </div>
    )
}
