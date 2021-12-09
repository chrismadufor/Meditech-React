import '../styles/modal.css'

export const GenericModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" className='closeBtn' onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };