import { Circles } from 'react-loader-spinner';
import { LoaderApp } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderApp>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderApp>
  );
};
