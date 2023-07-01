import Clock from "./Clock";
import HeaderDate from "./HeaderDate";

export default function Header() {
  return (
    <header className="mb-2">
      <nav>
        <ul className="flex justify-between">
          <li>P301</li>
          <li>CEEFAX</li>
          <li>1</li>
          <li>301</li>
          <HeaderDate />
          <Clock />
        </ul>
      </nav>
      <div className="flex gap-4 text-7xl font-bold">
        <h1>
          <span className="ml-2 bg-white px-1 text-black">P</span>
          <span className="ml-2 bg-white px-1 text-black">W</span>
          <span className="ml-2 bg-white px-1 text-black">A</span>
        </h1>
        <h2 className="title grow bg-teletext-blue text-center text-teletext-green">
          TITLE
        </h2>
      </div>
    </header>
  );
}
