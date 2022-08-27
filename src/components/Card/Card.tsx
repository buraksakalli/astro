import { format, parseISO } from "date-fns";

interface CardProps {
  title: string;
  date?: string;
  body: string;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <time dateTime={"27-08-2022"} className="block text-sm text-slate-700">
        {format(parseISO(new Date().toISOString()), "LLLL d, yyyy")}
      </time>
      <h2 className="text-3xl font-bold">
        <a className="text-white hover:text-gray-400 duration-300 transition-all">
          {props.title}
        </a>
      </h2>
      <p className="mt-2 text-slate-600">{props?.body ?? "No content"}</p>
    </div>
  );
};
