const SkeletonLoader = ({ quantity = 1 }) => {

    const repeat = () => {
        let items = [];
        for (let i = 0; i < quantity; i++) {
            items.push(<div className="skeleton-loader" key={i}></div>);
        }
        return items;
    }

    return (
        <div className="skeleton">
            {repeat()}
        </div>
    )
}

export default SkeletonLoader