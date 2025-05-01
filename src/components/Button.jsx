export default function Button({ variant, children, handleClick }) {
  return (
    <button onClick={handleClick} className={variant}>
      {children}
    </button>
  );
}
