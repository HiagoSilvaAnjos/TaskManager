import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-600 gap-3 flex flex-col items-center space-y-4">
      <div className="flex items-center w-[600px] justify-center mt-8 relative">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer hover:bg-slate-800 transition-all duration-75 bg-slate-500 p-2 rounded text-slate-200 absolute top-0 bottom-0 left-0"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-white text-4xl">TASK DESCRIPTION</h1>
      </div>
      <div className="rounded flex space-y-2 p-8 bg-slate-200 flex-col w-[600px] gap-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          quasi!
        </p>
      </div>
    </div>
  );
};

export default TaskPage;
