function PrimaryBtn(props) {
    return (
        <div className="px-8 py-2 rounded-sm bg-[#488480] hover:bg-[#488480dd] text-white font-semibold cursor-pointer select-none" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export { PrimaryBtn }