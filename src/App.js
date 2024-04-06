import './App.css';

const App = () => {
  const handleParentClick = event => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      console.log('parent clicked');
      // 👇 Your logic here
    }
  };

  const handleChildClick = event => {
    console.log('child clicked');
  };

  return (
    <div>
      <p onClick={handleParentClick}>
        Parent element
        <span
          style={{margin: '2rem'}}
          onClick={handleChildClick}
        >
          Child element
        </span>
      </p>
    </div>
  );
};

export default App;
