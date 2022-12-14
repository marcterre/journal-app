export function Tapbar({ children }) {
  return (
    <button className="buttonTapbar">
      {children}
      <p className="buttonCounter">{count}</p>
    </button>
  );
}

const count = 2;
