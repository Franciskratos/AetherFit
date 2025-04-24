

type HeaderProps = {
  logoSrc: string;
  pageTitle: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header>
      <img src={props.logoSrc} className="App-logo" alt="logo" />
      <h1 className="App-tittle">{props.pageTitle}</h1>
    </header>
  );
}
