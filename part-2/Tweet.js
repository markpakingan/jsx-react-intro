const Tweet = (props) => {
    const {username, name, date, message} = props;

    return(
        <div class="tweet">
            <li class= "username" >{username}</li>
            <li class = "name" >{name}</li>
            <li class="date" >{date}</li>
            <li class="message" >{message}</li>
        </div>
    )

}