import './App.css';
import Icons from '../Icons/Icons';

function App() {
  return (
    <section>
      <div className="wrapper">
        <Icons  app={"Instagram"} />
        <Icons app={"Facebook"} />
        <Icons app={"Twitter"} />
        <Icons app={"LinkedIn"} />
        <Icons app={"YouTube"} />
        <Icons app={"Github"} />
      </div>
    </section>
  )
}

export default App;
