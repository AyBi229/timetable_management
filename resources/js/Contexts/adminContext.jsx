import { createContext, useContext, useState } from "react";

const AdminContext = createContext([]);

export function AdminProvider({ children }) {
    const [types, setTypes] = useState([]);
    // const handleFetch = () => {
    //     router.get("/admin-types", {
    //         preserveState: true, // Keeps current component state
    //         preserveScroll: true, // Keeps scroll position
    //         replace: true, // Replaces history state
    //     });
    // };
    useEffect(handleFetch);
    return (
        <AdminContext.Provider value={{ types, setTypes }}>
            {children}
        </AdminContext.Provider>
    );
}

// Custom hook so you don't have to import 'useContext' everywhere
export function useAdmin() {
    return useContext(AdminContext);
}
