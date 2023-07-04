const Person = (props) => {
    const {name, age, hobbies} = props

    return (
        <div>
            <p>"Learn some information about this person:"</p>
            {name.length > 8 ? name.substring(0,6) : 
            name.substring(0, name.length)}
            {age}
            {age > 18? (
                <h3> Please vote</h3>) : (<h3> You are not 18</h3>)
            }
            <li>{hobbies}</li>

        </div>
        
    )
}