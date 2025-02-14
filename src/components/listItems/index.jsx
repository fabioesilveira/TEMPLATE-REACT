
function ListItems({ items }) {
    return (
        <div>
            {items.map((e, i) => (
                <div>
                    <h4>{e.name}</h4>
                    <p>{e.brand}</p>
                </div>
            ))}
        </div>
    )
}

export default ListItems;