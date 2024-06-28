import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../../services/gameServices";
import { createComment, getComments } from "../../services/commentServices";

const GameDetails = () => {
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function loadGame() {
            let result = await getGame(id)
            setGame(result)
        }

        async function loadComments() {
            let result = await getComments()
            setComments(result)
        }

        loadGame()
        loadComments()
    }, [])

    const addNewCommentHandler = async (e) => {
        e.preventDefault()

        let commentData = Object.fromEntries(new FormData(e.currentTarget))
        commentData.gameId = id
        
        let comment = await createComment(commentData)
        setComments(currentState => [...currentState, comment])
    }

    return (
        // <!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {comments.map((comment) => (
                            <li className="comment" key={comment._id}>
                                <p>{comment.username}: {comment.comment}</p>
                            </li>
                        ))}
                        
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addNewCommentHandler}>
                    <input type="text" name="username" placeholder="Username......" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}

export default GameDetails;