import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function AdminsCard({ regionalOffice }) {
    const [showAmins, setShowAdmins] = useState(false)

    const assignAdmin = () => {
        setShowAdmins(true)
    };
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Region
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Admin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {regionalOffices.map((ro) => {
                        const {
                            id,
                            region,
                            regional_admins,
                        } = ro;
                        return (
                            <tr
                                key={id}
                                className="bg-white border-b border-gray-200"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {region}
                                </th>
                                <td className="px-6 py-4 relative">
                                    {regional_admins.length ? (
                                        regional_admins.map((ra) => {
                                            const {
                                                id,
                                                first_name: firstName,
                                                last_name: lastName,
                                            } = ra;
                                            return (
                                                <p key={id}>
                                                    {firstName} {lastName}
                                                </p>
                                            );
                                        })
                                    ) : (
                                        <button
                                            className="plus-btn flex gap-1 items-center justify-center hover:text-black"
                                            title="Assign admin"
                                            onClick={() => assignAdmin()}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4 12H20M12 4V20"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>{" "}
                                            Assign
                                        </button>
                                    )}
                                    <ul className="absolute">
                                        {regional_admins.length ? regional_admins.map(regional_admin => {
                                            return(
                                                <li>{regional_admin.user.first_name} {regional_admin.user.last_name}</li>
                                            )
                                        }) : <li><button onClick={() => setAdminOpen(true)}>Add admin</button></li>}
                                    </ul>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
