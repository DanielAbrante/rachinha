import { useState } from "react";
import S from "./RachaList.module.css"

export function RachaList() {
    const [newPlayerInput, setNewPlayerInput] = useState<string>('');
    const [playersList, setPlayersList] = useState<string[]>([]);

    const renamePlayer = (index: number, value: string) => {
        const updatedPlayersList = [...playersList]

        updatedPlayersList[index] = value;

        setPlayersList(updatedPlayersList);
    }

    const addNewPlayer = () => {
        if (!newPlayerInput || newPlayerInput.trim() === '') return;

        setNewPlayerInput('')

        setPlayersList([...playersList, newPlayerInput])
    }

    return (
        <article className={S.RachaListContainer}>
            <section>
                <h1>Lista do Racha</h1>

                <ul>
                    {
                        playersList.map((player, index) => (
                            <li>
                                <input type="text" value={player} key={index} onChange={(e) => renamePlayer(index, e.target.value)} />
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className={S.RachaListForm}>
                <input type="text" placeholder="Jogador(a)" value={newPlayerInput} onChange={(e) => setNewPlayerInput(e.target.value)} autoFocus />
                <button type="button" onClick={addNewPlayer}>Adicionar</button>
            </section>
        </article>
    );
}
