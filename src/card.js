import { useState } from 'react';
import Modal from './Modal';

const Card = ({ name, email }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="card">
				this is a sample Card with some details
				<button onClick={() => setShowModal(true)}>view details</button>
			</div>
			{showModal && (
				<Modal setShowModal={setShowModal} name={name} email={email} />
			)}
		</>
	);
};

export default Card;
