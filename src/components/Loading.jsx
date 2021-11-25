import Loader from 'react-loader-spinner';

function Loading({ color = '#714088' }) {
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
      <Loader type="Hearts" color={color} height={180} width={180} />;
    </div>
  );
}
export { Loading };
