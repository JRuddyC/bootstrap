export const MenuButton = ({ label, onClick }) => (
    <button className="btn btn-dark w-100 text-start" onClick={onClick}>
        {label}
    </button>
);
