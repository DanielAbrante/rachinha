import { useRef, useState } from "react";
import S from "./RachaList.module.css"

export function RachaList() {
    const [newPlayerInput, setNewPlayerInput] = useState<string>('');
    const [playersList, setPlayersList] = useState<string[]>([]);

    const newPlayerInputRef = useRef<HTMLInputElement>(null);

    const renamePlayer = (index: number, value: string) => {
        const updatedPlayersList = [...playersList]

        updatedPlayersList[index] = value;

        setPlayersList(updatedPlayersList);
    }

    const deletePlayer = (index: number) => {
        setPlayersList(playersList.filter((_, i) => index !== i))
    }

    const addNewPlayer = () => {
        const newPlayerInputElement = newPlayerInputRef.current
        if (!newPlayerInputElement) return;

        if (!newPlayerInput || newPlayerInput.trim() === '') return;
        setNewPlayerInput('')

        newPlayerInputElement.focus();

        setPlayersList([...playersList, newPlayerInput])
    }

    return (
        <article className={S.RachaListContainer}>
            <section>
                <h1>Lista do Racha</h1>

                <ul>
                    {
                        playersList.map((player, index) => (
                            <li key={index}>
                                <input type="text" value={player} key={index} onChange={(e) => renamePlayer(index, e.target.value)} />
                                <button onClick={() => deletePlayer(index)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className={S.RachaListForm}>
                <input type="text" placeholder="Jogador(a)" value={newPlayerInput} ref={newPlayerInputRef} onChange={(e) => setNewPlayerInput(e.target.value)} autoFocus />
                <button type="button" onClick={addNewPlayer}>Adicionar</button>
            </section>

        </article>
    );
}
