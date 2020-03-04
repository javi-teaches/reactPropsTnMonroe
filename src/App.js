import React from 'react';
import Navbar from './views/Navbar';

function App() {
	return (
		<React.Fragment>
			<Navbar>
				<p>Esto es un párrafo</p>
				<hr/>
				<img alt="un jean" src="https://unspun.s3.amazonaws.com/2019/12/jean-1022x1080.png" width="100" />
			</Navbar>

			<Navbar>
				<h2>Otro Navbar</h2>
			</Navbar>
		</React.Fragment>
	);
}

export default App;
