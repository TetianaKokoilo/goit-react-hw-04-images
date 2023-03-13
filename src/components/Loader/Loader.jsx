import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => (
  <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#303f9f"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
  />
);
