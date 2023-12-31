import Hi from "./Hi"

export default function Requirements() {
    return (
        <>
            <h3 className="text-xl font-bold">Requirements</h3>
            <ol className="list-[auto] pl-4 pr-1 flex flex-col gap-2">
                <li>
                    <p>
                        <Hi>NodeJS</Hi>, pastikan dikomputer teman-teman sudah
                        terinstall NodeJs yaaa...
                    </p>
                </li>
                <li>
                    <p>
                        <Hi>Git & Akun Github</Hi>, tentunya kita akan
                        memerlukan <Hi>git</Hi> dan akun github target untuk
                        proses selanjutnya, pastikan <Hi>git</Hi> sudah
                        terinstall dengan benar pada device teman-teman.
                    </p>
                </li>
            </ol>
        </>
    )
}
