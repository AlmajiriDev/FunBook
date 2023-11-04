const CustomButton = ({titie, containerStyle, iconRight, type, onClick}) => {
  return (
    <button
        onClick={onClick}
        type={type || "button"}
        className={`inline-flex items-center text-base ${containerStyle}`}
    >
        {titie}
        {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  )
}

export default CustomButton