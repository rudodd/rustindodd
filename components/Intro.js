export default function Intro(props) {

  const { introTextSmall, textOneVisible, textTwoVisible } = props;
  
  return (
    <div className={`intro${introTextSmall ? ' small' : ''}`}>
      <h1><span className={!textOneVisible ? 'hidden' : '' }>Well, </span><span className={!textTwoVisible ? 'hidden' : '' }>hello there.</span></h1>
    </div>
  )
}