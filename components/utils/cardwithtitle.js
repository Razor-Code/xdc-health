function CardWithTitle(props) {
    return (
        <>
            <h3 className="text-[#494949] font-bold text-lg mb-1">{props.title}</h3>
            <div className="rounded-sm border-2 border-[#E0E0E0] p-2">{props.children}</div>
        </>
    )
}

export default CardWithTitle;