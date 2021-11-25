import Loader from 'react-loader-spinner';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Loading({ color }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        width: '100',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader
        type="Hearts"
        color={color || theme.color}
        height={180}
        width={180}
      />
      ;
    </div>
  );
}
export { Loading };
