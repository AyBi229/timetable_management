<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RegionalOffice;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $regionalOffices = RegionalOffice::all(); // You can also paginate here

        return Inertia::render('Dashboard', [
            'regional_offices' => $regionalOffices,
        ]);
    }
}
