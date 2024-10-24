import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-600 flex flex-col items-center space-y-4">
      <h1 className="text-white text-4xl mt-6">TASK MANAGER</h1>
      <div className="rounded flex space-y-2 p-8 bg-slate-200 flex-col w-[600px] gap-2">
        <input
          className="px-2 py-3 rounded border outline-none border-slate-700 text-zinc-700"
          type="text"
          placeholder="Adicione o título da tarefa"
        />
        <input
          className="px-2 py-3 rounded border outline-none border-slate-700 text-zinc-700"
          type="text"
          placeholder="Adicione a descrição da tarefa"
        />
        <button className="bg-slate-800 text-white rounded px-2 py-3 hover:bg-slate-600 duration-75 transition-all">
          Adicionar
        </button>
      </div>

      <div className="rounded flex flex-col justify-center items-center w-[600px] space-y-2 p-8 bg-slate-200 gap-2">
        <div className="w-full flex items-center justify-between gap-3  ">
          <button className="bg-slate-400 text-white p-3 rounded overflow-hidden flex-1 text-start">
            Lorem ipsum dolor sit amet consectetur
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/task")}
              className="bg-slate-400 text-white rounded p-3 hover:bg-slate-600 duration-75 transition-all"
            >
              <ChevronRightIcon />
            </button>
            <button className="bg-slate-400 text-white rounded p-3 hover:bg-slate-600 duration-75 transition-all">
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
