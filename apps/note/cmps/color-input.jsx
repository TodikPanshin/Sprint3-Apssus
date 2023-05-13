export function ColorInput({ onSetNoteStyle,isHidden }) {
    const colors = ['#D3D3D3','#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1']

    function onChooseColor(color) {
        const newStyle = { backgroundColor: color }
        onSetNoteStyle(newStyle)
    }

    return <section className={`color-input ${isHidden?"hidden":''}`}>
        <div className="user-color-container">
            {
                colors.map(color => <div
                    className="user-color"
                    key={color}
                    style={{ backgroundColor: color }}
                    onClick={() => onChooseColor(color)}
                ></div>)
            }
        </div>
    </section>
}