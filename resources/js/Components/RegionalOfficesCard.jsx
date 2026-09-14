import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import CreateAdminPopup from "./CreateAdminPopup";

export default function RegionalOfficesCard({ regionalOffices, regional_admins, setAdminOpen }) {
    const [showAmins, setShowAdmins] = useState(false)
    const [createAdminPopup, setCreateAdminPopup] = useState(false)

    const assignAdmin = () => {
        setShowAdmins(true)
    };

    const handleAddingAdmin = () => {
        setCreateAdminPopup(true)
        setShowAdmins(false)
    }
    return (
        <div className="shadow-md sm:rounded-lg h-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 relative">
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
                                className="bg-white border-b border-gray-200 relative"
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
                                    {showAmins && <ul className="absolute border bg-white rounded px-4 py-2 w-max">
                                        {regional_admins.length ? regional_admins.map(regional_admin => {
                                            return(
                                                <li>{regional_admin.user.first_name} {regional_admin.user.last_name}</li>
                                            )
                                        }) : <li><button onClick={handleAddingAdmin} className="px-2 py-1 hover:bg-[#636387] rounded transition  hover:text-white border border-[#636387] text-[#636387]">Add admin</button></li>}
                                    </ul>}
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
            {createAdminPopup && <CreateAdminPopup regionalOffices regional_admins setAdminOpen/>}
        </div>
    );
}
