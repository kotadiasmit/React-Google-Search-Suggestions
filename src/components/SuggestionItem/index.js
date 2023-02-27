import './index.css'

const SuggestionItem = props => {
  const {result, selectResult} = props
  const {suggestion} = result
  const onClickResult = () => {
    selectResult(suggestion)
  }

  return (
    <li className="each-list">
      <div className="result-container">
        <p className="suggestion">{suggestion}</p>
        <button type="button" className="btn" onClick={onClickResult}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
