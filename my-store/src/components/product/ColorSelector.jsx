// Color swatch circles — highlights selected color
export default function ColorSelector({ colors = [], selected, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">
        Color: <span className="font-bold">{selected || 'Select'}</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color) => (
          <button
            key={color.name}
            title={color.name}
            onClick={() => onChange(color.name)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selected === color.name ? 'border-black scale-110' : 'border-transparent hover:scale-105'
            }`}
            style={{ background: color.hex }}
          />
        ))}
      </div>
    </div>
  )
}
