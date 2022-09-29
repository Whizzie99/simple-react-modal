import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div>
				hello
				<button onClick={() => setShowModal(true)}>click to open modal</button>
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}
		</>
	);
}

export default App;
