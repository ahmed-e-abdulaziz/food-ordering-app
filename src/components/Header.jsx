import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <h1>ReactFood</h1>
        <img src={logo} alt="A restaurant image" />
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
