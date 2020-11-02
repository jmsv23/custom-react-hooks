import Ruler from '../components/Ruler';
import Rainbow from '../components/Rainbow';

const Candidate = () => {
  return (
    <>
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

export default Candidate
