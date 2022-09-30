import './modal.css';

const Modal = ({ setShowModal, name, email }) => {
	return (
		<div className="modal-wrapper">
			<div className="modal">
				<button className="close-btn" onClick={() => setShowModal(false)}>
					x
				</button>
				<div className="modal-body">
					<h1>name: {name} </h1>
					<h3>email: {email} </h3>
				</div>
			</div>
		</div>
	);
};

export default Modal;
