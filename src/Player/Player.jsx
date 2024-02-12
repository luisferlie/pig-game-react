import './Player.css'
// props = {name: 'Player 1', score: 43, current: 0, isActive: true}
function Player({ name, score, current, isActive }) {
  // const { name, score, current, isActive } = props
  let classPlayer=
  isActive?
    score>100?
      'player--winner':
      'player player--active'
  :'player'
  

  return (

    <section className={classPlayer}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current||0}</p>
      </div>
    </section>
  )
}
export default Player