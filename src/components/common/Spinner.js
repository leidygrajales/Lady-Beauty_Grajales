const Spinner = ({ className = '', description = 'Cargando...' }) => {

    const repeat = (quantity) => {
        let items = [];
        for (let i = 0; i < quantity; i++) {
            items.push(<div key={i}></div>);
        }
        return items;
    }
    return (
        <div className={`lds-spinner ${className}`}>
            <div className="lds-spinner__items">
                {repeat(12).map((item) => item)}
            </div>
            <div className="lds-spinner__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Spinner