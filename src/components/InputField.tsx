import { useRef } from "react";

// declaring the props type
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="w-full"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          className="px-5 py-3 outline outline-cyan-500 outline-offset-0 focus:outline-green-500 rounded-md shadow-md"
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Enter a ToDo"
        />
        <button
          type="submit"
          className="px-3 ml-4 py-2 bg-cyan-500 rounded-full shadow-md"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
