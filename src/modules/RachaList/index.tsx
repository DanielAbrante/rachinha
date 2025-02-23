import S from "./RachaList.module.css"

export function RachaList() {
    return (
        <article className={S.RachaListContainer}>
            <section>
                <h1>Lista do Racha</h1>
            </section>

            <section className={S.RachaListForm}>
                <input type="text" placeholder="Jogador(a)" />
                <button type="button">Adicionar</button>
            </section>
        </article>
    );
}
