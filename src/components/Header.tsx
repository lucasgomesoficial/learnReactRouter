import { useCookies } from "react-cookie";
import { Navbar } from "./Navbar";
import { usePickCep } from "../hooks/usePickCep";

export function Header() {
  const [cookies, setCookie] = useCookies<string>(["cep"]);
  const { about } = usePickCep();

  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCookie("cep", e.target.value);
  };

  const isNotActive = !cookies.cep || cookies.cep === "undefined";

  return (
    <header className="flex items-center bg-primary text-secondary h-20">
      <h1 className="flex-1 text-3xl px-10">
        {`</>`} Dev{about?.apelido || "Alguém"}
      </h1>
      <div className="flex-1 flex gap-5">
        {!isNotActive && <Navbar />}
        <form>
          <select
            className="text-primary"
            value={cookies.cep}
            onChange={handleSubmit}
          >
            <option value="" selected>
              Selecione um Dev
            </option>
            <option value="14090082">Lucas</option>
            <option value="05171500">Julia</option>
            <option value="77825822">Fernanda</option>
            <option value="72016280">Flaviane</option>
            <option value="57082025">Gabriela</option>
          </select>
        </form>
      </div>
    </header>
  );
}
