export default function Modal({
  setIsModalOpen,
  title,
  content,
  children
}) {
  return (
    <div className="overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="modalHeader">{title}</h2>}
        <div className="modalBody">{content}</div>
        <div className="modalFooter">
         {children}
        </div>
      </div>
    </div>
  );
}
