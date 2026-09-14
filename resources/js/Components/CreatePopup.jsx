import { useState } from "react";

const form = {
    fields: [],

}
export default function CreatePopup(module) {
    const [form, setForm] = useState(form);
    switch (module) {
        case "admin":
            setForm(prev => ({...prev, fields: { name: 'Type', type: 'select'}}))
    }
    return (
        <div>
            <form>
                {form.fields.map(field => {
                    sw
                })}
            </form>
        </div>
    );
}
