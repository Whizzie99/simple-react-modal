import './modal.css';

const Modal = ({ setShowModal }) => {
	return (
		<div className="modal-wrapper">
			<div className="modal">
				<button className="close-btn" onClick={() => setShowModal(false)}>
					x
				</button>
				<div className="modal-body">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					ducimus iure officia sed. Reiciendis, labore eaque tempore placeat
					voluptatum vitae!
				</div>
			</div>
		</div>
	);
};

export default Modal;
