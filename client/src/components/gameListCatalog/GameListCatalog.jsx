import { useEffect, useState } from "react";
import { getGames } from "../../services/gameServices";

const GameListCatalog = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        async function loadGames() {
            let result = await getGames()
            setGames(Object.values(result))
        }

        loadGames()
    }, [])


    return (
        // <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.map((game) => (
                <div className="allGames" key={game._id}>
                    <div className="allGames-info">
                        <img src={game.imageUrl} />
                        <h6>{game.category}</h6>
                        <h2>{game.title}</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
            ))}

            {/* <!-- Display paragraph: If there is no games  --> */}
            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
            
        </section>
    )
}

export default GameListCatalog;