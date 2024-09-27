import { InputText } from "../../components/InputText";
import { NavMenu } from "../../components/NavMenu";

export const FormPersonas = () => {
    return (
        <div>
            <NavMenu />

            <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <InputText id="email" type="email" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}