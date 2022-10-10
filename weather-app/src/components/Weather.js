
export default function Weather(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {
                        (!props.preview) ?
                        (
                            <h2 >{ props.data.name }</h2>
                        )
                        :
                        <Link to={`https://api.openweathermap.org/data/2.5/weather?q=${props.data.name}&appid=72c6ee3c4d2e4b2e112baa900ac495e8`}>{ props.data.name}</Link>
                    }
                </div>
                {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>{ props.data.body }</p>
                        <p>{ props.data.body }</p>
                        <p>{ props.data.body }</p>
                        <p>{ props.data.body }</p>
                        <p>{ props.data.body }</p>
                    </div>
                )
                :
                ''
            }
            </div>
        </div>
    )
}