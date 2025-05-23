import { Inertia } from '@inertiajs/inertia'

export const handleLogout = () => {
    Inertia.post('/logout', {}, {
        onFinish: () => {
            Inertia.visit('/login', { replace: true });
        },
    });
}

export default function LogoutButton() {
    return(
        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
            Log Out
        </button>
    );
}