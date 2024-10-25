import { useEffect, useState } from "react";

type Props = {
    page: number,
    setPage: (page: number) => void,
    cantPaginas: number
}
export const Paginador = ({ page, setPage, cantPaginas }: Props) => {
    const [paginas, setPaginas] = useState<Array<number>>([]);
    useEffect(() => {
        const paginasTemp = [];
        for (let i = 1; i <= cantPaginas; i++) {
            paginasTemp.push(i);
        }
        setPaginas(paginasTemp);
    }, [cantPaginas])

    return (
        <div>
            <ul className="flex">
                {paginas.map((pagina: number) => (
                    <li key={pagina}>
                        <button className={`px-4 py-2 ${page === pagina ? 'bg-blue-500 text-white' : 'bg-white'}`} onClick={() => setPage(pagina)}>{pagina}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}