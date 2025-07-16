import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function RegionalOfficesCard({ regionalOffices }) {

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
                        const { id, region, regional_admins: regionalAdmins } = ro;
                        return (
                            <tr key={id} className="bg-white border-b border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {region}
                                </th>
                                <td className="px-6 py-4">
                                    {regionalAdmins.length ? regionalAdmins.map((ra) => {
                                        const { id, first_name: firstName, last_name: lastName } = ra;
                                        return (
                                            <p key={id}>{firstName} {lastName}</p>
                                        )
                                    }) : 'None'}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}