type Props = {
    id: string;
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputText = ({ id, type, value, onChange }: Props) => {
    return (
        <input id={id} type={type} value={value} onChange={onChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
    );
}