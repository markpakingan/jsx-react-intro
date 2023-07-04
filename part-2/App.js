const App = () => {
    return (
        <div>
            <Tweet 
            username = "markp" 
            name = "mark" 
            date = {new Date().toDateString()}
            message = "Is this the real life?"/>

            <Tweet 
            username = "jasonderulo" 
            name = "jason" 
            date = {new Date().toDateString()}
            message = "Or is this just fantasy?"/>

            <Tweet 
            username = "nicky minaj" 
            name = "nicky" 
            date = {new Date().toDateString()}
            message = "Caught in the landslide!"/>
        </div>
    );
}