import PropTypes from 'prop-types'

export default function Button({ label, backgroundColor = 'blue', size = 'md', onClick } : any) {
    let scale = 1
    if ( size === 'sm') scale = 0.75
    if ( size === 'lg') scale = 1.5

    const style = {
        backgroundColor,
        padding: `${scale*0.5}rem ${scale*1}rem`,
        border: 'none'
    }

    return (
        <button onClick={onClick} style={style}>
            {label}
        </button>
    )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
}