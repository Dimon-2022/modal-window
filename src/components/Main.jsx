import Button from "./Button";

export default function Main({ setIsModalOpen, children}) {
  return (
    <div className="app">
      <h1 className="title">Universal Modal Component</h1>
      <Button variant="button" handleClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      {children}      
    </div>
  );
}
