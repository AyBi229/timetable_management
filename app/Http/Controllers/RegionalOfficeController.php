<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RegionalOffice;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RegionalOfficeController extends Controller
{
    function index() {
        $regionalOffices = RegionalOffice::all();
        return Inertia::render('Dashboard', [
            'regional_offices' => $regionalOffices
        ]);
    }
    
    function store(Request $req) {
        $validateData = $req->validate([
            'region' => 'required|string'
        ]);

        $regionalOffice = RegionalOffice::create($validateData);

        return Redirect::route('dashboard')
        ->with('success', 'Regional office created successfully!');
    }
}
