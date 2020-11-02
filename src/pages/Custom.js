import Ruler from '../components/HookedRuler';
import Rainbow from '../components/HookedRainbow';

const Custom = () => {
  return (
    <>
      <h1 className="text-red-700 text-3xl">Con Custom Hooks</h1>
      <div>
        <h2 className="text-2xl text-blue-600">Ruler</h2>
        <Ruler />
      </div>
      <div>
        <h2 className="text-2xl text-blue-600">Rainbow</h2>
        <Rainbow />
      </div>
    </>
  );
}

export default Custom
