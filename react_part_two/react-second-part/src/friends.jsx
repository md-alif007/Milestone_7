import { use } from "react"
import Friend from "./friend";

export default function Friends({ friendsPromise }) {

    const friendsUse = use(friendsPromise);
    return (
        <div className="card">
            <h3>Friends : {friendsUse.length}</h3>
            {
                friendsUse.map(friend =>
                    <Friend friend={friend}></Friend>)
            }
        </div>
    )
}