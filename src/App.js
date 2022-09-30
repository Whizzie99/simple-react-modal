// import { useState } from 'react';
// import Modal from './Modal';
import { sampleData } from './sampleData';
import Card from './card';
import './App.css';

function App() {
	// const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="card-list">
				{sampleData.map((data) => (
					<Card key={data.name} name={data.name} email={data.email} />
				))}
			</div>
		</>
	);
}

export default App;
