import { Circles } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
