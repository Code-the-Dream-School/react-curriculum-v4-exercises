import './Week07Styles.css';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} props.loading
 * @param {React.MouseEventHandler} props.onClick
 */
export default function Button({ children, loading = false, onClick }) {
  return (
    <button
      type="button"
      tabIndex={0}
      onClick={onClick}
      disabled={loading}
      className="button"
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
