import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<form action=''>
					<textarea name='' id='' cols='30' rows='10' placeholder='notes...'></textarea>
					<button>Generate</button>
				</form>
				<div className='rulete'></div>
			</div>
			{/* 	<div className='container'>
			</div> */}
		</>
	);
};

export default App;
